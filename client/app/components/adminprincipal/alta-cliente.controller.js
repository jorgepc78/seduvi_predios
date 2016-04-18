(function() {
    'use strict';
	
	angular
	    .module('seduvi_inv_predios')
	    .controller('altaClienteController', altaClienteController)

	altaClienteController.$inject = ['$scope', '$q', 'SweetAlert', 'notify', '$state', '$timeout', 'Cliente', 'Rubro', 'SucursalesCliente', 'listaLocalidades', 'listaRubros', 'ListaTag'];
	
	function altaClienteController($scope, $q, SweetAlert, notify, $state, $timeout, Cliente, Rubro, SucursalesCliente, listaLocalidades, listaRubros, ListaTag) {

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
	      vm.isDisabled             = false;
	      vm.alertNoDireccion       = false;
	      vm.alertNoLocalidad       = false;
	      vm.tags                   = [];

	      vm.cliente = {
	        idRubro          : 0,
	        rubrosTags       : "",
	        compania         : "",
	        nombre           : "",
	        apellidos        : "",
	        descripcion      : "",
	        celular1         : "",
	        operadorCelular1 : "",
	        celular2         : "",
	        email            : "",
	        telefonoOficina  : "",
	        direccion        : "",
	        notas            : "",
	        idLocalidad      : 0,
	        fechaAlta        : "",
	        busqueda         : "",
	        sucursales : [
	        	{
	        		direccion : "",
	        		latitud   : 0,
	        		longitud  : 0
	        	}
	        ]
	      };

	      inicia();


	      function inicia() {

			      vm.combolocalidades = listaLocalidades;
			      vm.localidadSeleccionada = vm.combolocalidades[0];

				  angular.forEach(listaRubros, function(reg) {
				    	vm.comborubros.push({idRubro:reg.idRubro, rubro:reg.rubro})
				  });

				  vm.comborubros.push({idRubro:"-1", rubro:'Agregar nuevo'})


			      vm.model = { MapUbicacionGymEdit: undefined };

			      try {
			              vm.geocoder = new google.maps.Geocoder();

			              vm.mapOptions = {
			                  zoom: 8,
			                  center: new google.maps.LatLng(20.1947, -88.6783),
			                  // Style for Google Maps
			                  styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}],
			                  mapTypeId: google.maps.MapTypeId.ROADMAP
			              };        

					      $timeout(function(){
					          vm.marker = new google.maps.Marker({
					              map: vm.model.MapUbicacionGymEdit,
					              draggable: true,
					              position: new google.maps.LatLng(20.1947, -88.6783)
					          });
					      }, 1500);

			      }
			      catch(err) {
			      };

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
		              var address = vm.cliente.sucursales[0].direccion +', '+vm.localidadSeleccionada.nombreLocalidad;
		              vm.geocoder.geocode( { 'address': address}, function(results, status) {
			                if (status == google.maps.GeocoderStatus.OK)
			                {
			                    vm.model.MapUbicacionGymEdit.setCenter(results[0].geometry.location);
			                    if(vm.cliente.sucursales[0].direccion == '')
			                    	vm.model.MapUbicacionGymEdit.setZoom(8);
			               	    else
			                      	vm.model.MapUbicacionGymEdit.setZoom(17);

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
	      }


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
				          vm.cliente.celular1 = vm.cliente.celular1.replace(/[()-]/gi,'');
				          vm.cliente.celular1 = vm.cliente.celular1.replace(/[ ]/gi,'');

				          Cliente.find({
				                filter: {
				                    where: {celular1: vm.cliente.celular1},
				                    fields:['id','nombre','apellidos','celular1'],
				                }
				          })
				          .$promise
				          .then(function(cliente_encontrado) {
				                if(cliente_encontrado.length > 0)
				                {
			                    	swal('Celular principal duplicado', "El número de celular principal "+cliente_encontrado[0].celular1+" ya se encuentra registrado a la persona "+cliente_encontrado[0].nombre+" "+cliente_encontrado[0].apellidos, 'warning');
				                }
				                else
				                {
									var cadena_temp = '';

									angular.forEach(vm.tags, function(el_tag) {
									    cadena_temp += el_tag.tag + '|';
									});
									vm.cliente.rubrosTags = cadena_temp.substring(0, (cadena_temp.length-1));

									if(vm.cliente.sucursales[0] == undefined || vm.cliente.sucursales[0].direccion == '')
										var direccion_temp = vm.localidadSeleccionada.nombreLocalidad;
									else
										var direccion_temp = vm.cliente.sucursales[0].direccion;

									vm.cliente.busqueda = (vm.cliente.nombre+'|'+vm.cliente.apellidos+'|'+vm.cliente.compania+'|'+vm.cliente.celular1).toLowerCase();

									Cliente
									.create({
									    idRubro          : vm.rubroSeleccionado.idRubro,
									    rubrosTags       : vm.cliente.rubrosTags,
									    compania         : vm.cliente.compania,
									    nombre           : vm.cliente.nombre,
									    apellidos        : vm.cliente.apellidos,
									    descripcion      : vm.cliente.descripcion,
									    celular1         : vm.cliente.celular1,
									    operadorCelular1 : vm.cliente.operadorCelular1,
									    celular2         : vm.cliente.celular2,
									    email            : vm.cliente.email,
									    telefonoOficina  : vm.cliente.telefonoOficina,
									    direccion        : vm.cliente.direccion,
									    notas            : vm.cliente.notas,
									    idLocalidad      : vm.localidadSeleccionada.idLocalidad,
									    fechaAlta        : new Date(),
									    busqueda         : vm.cliente.busqueda
									})
									.$promise
									.then(function(nuevo_cliente) {

									        SucursalesCliente
									          .create({
									              idCliente : nuevo_cliente.idCliente,
									              direccion : direccion_temp,
									              latitud   : vm.marker.getPosition().lat(),
									              longitud  : vm.marker.getPosition().lng()
									          })
									          .$promise
									          .then(function(nueva_sucursal) {
							                        swal({
							                          title: "Registro del cliente",
							                          html: 'Registro realizado correctamente',
							                          type: 'info'
							                        }, function(){
							                            $state.go('index.adminprincipal');
							                        });
									          });

									})
									.catch(function(error) {
									  if(error.status == 413)
									    alert("El tamaño del archivo de imagen es muy grande");
									});
				                }
				          });
				}
	      };

	};

})();