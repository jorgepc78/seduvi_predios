(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('EditaClienteController', EditaClienteController)
  
    EditaClienteController.$inject = ['$scope', '$q', 'SweetAlert', 'notify', '$stateParams', '$state', '$timeout', 'Cliente', 'Rubro', 'SucursalesCliente', 'listaLocalidades', 'listaRubros', 'ListaTag'];

    function EditaClienteController($scope, $q, SweetAlert, notify, $stateParams, $state, $timeout, Cliente, Rubro, SucursalesCliente, listaLocalidades, listaRubros, ListaTag) {

          var vm = this;

          vm.ubicaDirMapa           = ubicaDirMapa;
          vm.cargaTags              = cargaTags;
          vm.tagAdded               = tagAdded;
          vm.agrega_rubro_principal = agrega_rubro_principal;
          vm.guardaDatosCliente     = guardaDatosCliente;

          vm.tituloSeccion          = 'Editar cliente';
          vm.txt_boton              = 'Guardar';
          vm.combolocalidades       = [];
          vm.localidadSeleccionada  = {};
          vm.comborubros            = [];
          vm.rubroSeleccionado      = {};
          vm.isDisabled             = true;
          vm.alertNoDireccion       = false;
          vm.alertNoLocalidad       = false;
          vm.tags                   = [];
          
          vm.model                  = { MapUbicacionGymEdit: undefined };

          
          inicia();


          function inicia() {

                try {
                        vm.geocoder = new google.maps.Geocoder();

                        vm.mapOptions = {
                            zoom: 9,
                            center: new google.maps.LatLng(20.1947, -88.6783),
                            // Style for Google Maps
                            styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}],
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        };        
                }
                catch(err) {
                };

                $q
                  .all([
                    Cliente.findById({ 
                        id: $stateParams.id,
                        filter: {
                          include: [
                              {
                                  relation: 'sucursales'
                              }
                          ]
                        }
                    }).$promise
                  ])
                  .then(function(data) {
                          vm.cliente = data[0];

                          if(vm.cliente.rubrosTags != '')
                          {
                              var res = vm.cliente.rubrosTags.split("|");
                              for(var i=0;i<res.length;i++) { 
                                vm.tags.push({id:i, tag:res[i]});
                              }                 
                          }

                          vm.combolocalidades = listaLocalidades;
                          vm.localidadSeleccionada;

                          var localidadSeleccionadaIndex = vm.combolocalidades
                                                              .map(function(localidad) {
                                                                return localidad.idLocalidad;
                                                              })
                                                              .indexOf(vm.cliente.idLocalidad);

                          vm.localidadSeleccionada = vm.combolocalidades[localidadSeleccionadaIndex];

                          angular.forEach(listaRubros, function(reg) {
                              vm.comborubros.push({idRubro:reg.idRubro, rubro:reg.rubro})
                          });

                          vm.comborubros.push({idRubro:"-1", rubro:'Agregar nuevo'})
                          
                          vm.rubroSeleccionado;

                          var rubroSeleccionadoIndex = vm.comborubros
                                                              .map(function(rubro) {
                                                                return rubro.idRubro;
                                                              })
                                                              .indexOf(vm.cliente.idRubro);

                          vm.rubroSeleccionado = vm.comborubros[rubroSeleccionadoIndex];

                          try {
                                  vm.model.MapUbicacionGymEdit.setCenter(new google.maps.LatLng(vm.cliente.sucursales[0].latitud, vm.cliente.sucursales[0].longitud));
                                  vm.model.MapUbicacionGymEdit.setZoom(17);

                                  vm.marker = new google.maps.Marker({
                                      map: vm.model.MapUbicacionGymEdit,
                                      draggable: true,
                                      position: new google.maps.LatLng(vm.cliente.sucursales[0].latitud, vm.cliente.sucursales[0].longitud)
                                  });            
                          }
                          catch (err) {
                                  
                                  vm.model.MapUbicacionGymEdit.setCenter(new google.maps.LatLng(20.1947, -88.6783));
                                  vm.model.MapUbicacionGymEdit.setZoom(11);

                                  vm.marker = new google.maps.Marker({
                                      map: vm.model.MapUbicacionGymEdit,
                                      draggable: true,
                                      position: new google.maps.LatLng(20.1947, -88.6783)
                                  });

                                  vm.ubicaDirMapa();
                          };

                });

          }


          function ubicaDirMapa() {

                vm.alertNoDireccion = false;
                vm.alertNoLocalidad = false;

                if(vm.localidadSeleccionada.id == '')
                {
                      vm.alertNoLocalidad = true;      
                      $timeout(function(){
                           $scope.alertNoLocalidad = false;
                      }, 5000);
                }
                else
                {
                      if(vm.cliente.sucursales[0] !== undefined) {
                        var address = vm.cliente.sucursales[0].direccion +', '+vm.localidadSeleccionada.nombreLocalidad;
                        vm.model.MapUbicacionGymEdit.setZoom(17);
                      }
                      else {
                        var address = vm.localidadSeleccionada.nombreLocalidad;
                        vm.model.MapUbicacionGymEdit.setZoom(11);
                      }

                      vm.geocoder.geocode( { 'address': address}, function(results, status) {

                        if (status == google.maps.GeocoderStatus.OK)
                        {
                            vm.model.MapUbicacionGymEdit.setCenter(results[0].geometry.location);
                            vm.marker.setPosition(results[0].geometry.location);
                        } else {
                            vm.alertNoDireccion = true;
                            $timeout(function(){
                                 vm.alertNoDireccion = false;
                            }, 8000);
                        }
                      });
                }
          };


          function cargaTags(query) {

                return ListaTag.find({
                      filter: {
                          where: {
                              tag: {
                                  like: query.toLowerCase() + '%', 
                                  options: 'i'
                              }
                          }
                      }
                })
                .$promise;

          };

          function tagAdded(tagelement) {
            
                ListaTag.count({
                    where: {
                        tag: {
                            like: tagelement.tag.toLowerCase() + '%', 
                            options: 'i'
                        }
                    }
                })
                .$promise
                .then(function(resp) {
                    if(resp.count == 0)
                    {
                            ListaTag
                            .create({
                                tag : tagelement.tag.toLowerCase(),
                            })
                            .$promise
                            .then(function(nueva_sucursal) {
                                  //console.log('Added: ' + tagelement.tag);
                            });
                    }
                });

          };


          function agrega_rubro_principal() {
                
                if(vm.rubroSeleccionado.idRubro == '-1')
                {
                        swal({
                          title: 'Agregar rubro',
                          html: '<input type="text" class="form-control" id="input-field">',
                          showCancelButton: true,
                          closeOnConfirm: true
                        },
                        function() {
                              
                              Rubro
                              .create({
                                  rubro : document.getElementById("input-field").value
                              })
                              .$promise
                              .then(function(nuevo_rubro) {
                                    vm.comborubros.unshift(nuevo_rubro);
                                    listaRubros.push(nuevo_rubro);
                                    vm.rubroSeleccionado = nuevo_rubro;
                              });
                              

                        });              
                }

          };


          function guardaDatosCliente() {

                if(vm.rubroSeleccionado.idRubro == '-1')
                {
                      notify({ 
                        message: 'Debe seleccionar un rubro válido',
                        duration: 4000, 
                        classes: 'alert-info',
                        templateUrl: 'app/shared/layout/notify.html',
                        position: 'center'
                      });
                }
                else if(vm.tags == '')
                {
                      notify({ 
                        message: 'El contacto debe tener al menos un tag',
                        duration: 4000, 
                        classes: 'alert-info',
                        templateUrl: 'app/shared/layout/notify.html',
                        position: 'center'
                      });
                }
                else
                {
                      vm.cliente.idRubro = vm.rubroSeleccionado.idRubro;
                      var cadena_temp = '';
                      
                      angular.forEach(vm.tags, function(el_tag) {
                            cadena_temp += el_tag.tag + '|';
                      });
                      vm.cliente.rubrosTags = cadena_temp.substring(0, (cadena_temp.length-1));

                      if(vm.cliente.sucursales[0] == undefined || vm.cliente.sucursales[0].direccion == '') {
                          vm.cliente.sucursales[0] = {
                            direccion: vm.localidadSeleccionada.nombreLocalidad
                          }
                          direccion_temp = vm.localidadSeleccionada.nombreLocalidad;
                      }
                      else
                          direccion_temp = vm.cliente.sucursales[0].direccion;

                      vm.cliente.busqueda = (vm.cliente.nombre+'|'+vm.cliente.apellidos+'|'+vm.cliente.compania+'|'+vm.cliente.celular1).toLowerCase();

                      vm.cliente
                      .$save()
                      .then(function(cliente) {

                          Cliente.sucursales.destroyAll({ id: cliente.idCliente })
                            .$promise
                            .then(function() {
                                  
                                SucursalesCliente
                                  .create({
                                      idCliente : vm.cliente.idCliente,
                                      direccion : direccion_temp,
                                      latitud   : vm.marker.getPosition().lat(),
                                      longitud  : vm.marker.getPosition().lng(),
                                  })
                                  .$promise
                                  .then(function(nueva_sucursal) {
                                        $state.go('index.adminprincipal');
                                  });
                          });
                          
                      })
                      .catch(function(error) {
                          if(error.status == 413)
                            alert("El tamaño del archivo de imagen es muy grande");
                      });
                }
          };

    };

})();