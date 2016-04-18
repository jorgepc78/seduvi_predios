(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('DisponiblesPrincipalController', DisponiblesPrincipalController);

    DisponiblesPrincipalController.$inject = ['$timeout', '$state', 'SweetAlert', 'tablaDatosService', 'CatMunicipios', 'VistaLocalidadesPredios', 'VistaColoniasPredios', 'VistaPrediosDisponibles'];

    function DisponiblesPrincipalController($timeout, $state, SweetAlert, tablaDatosService, CatMunicipios, VistaLocalidadesPredios, VistaColoniasPredios, VistaPrediosDisponibles ) {

            var vm = this;
            vm.listaMunicipios = [{claveMunicipio: 0, nombreMunicipio: 'Estado'}];
            vm.listaLocalidades = [{idLocalidad: 0, nombreLocalidad: 'Seleccione municipio'}];
            vm.listaColonias = [{idColonia: 0, colonia: 'Seleccione municipio'}];
            vm.municipioSeleccionado = {};
            vm.localidadSeleccionada = {};
            vm.coloniaSeleccionada = {};
            vm.mapa = { MapaUbicacionPredio: undefined};

            vm.muestra_clientes_municipio = muestra_clientes_municipio;
            vm.muestra_clientes_localidad = muestra_clientes_localidad;
            vm.muestra_clientes_colonia = muestra_clientes_colonia;
            vm.muestraDatosPredioActual  = muestraDatosPredioActual;

            vm.muestraResultadosBusqueda  = muestraResultadosBusqueda;
            vm.limpiaBusqueda             = limpiaBusqueda;
            vm.cambiarPagina              = cambiarPagina;
            vm.eliminar_cliente           = eliminar_cliente;

            vm.tituloSeccion = 'Predios disponibles';
            vm.tablaListaPredios = {
              totalElementos     : 0,
              paginaActual       : 1,
              registrosPorPagina : 10,
              inicio             : 0,
              fin                : 1,
              condicion          : {},
              filtro_datos       : {},
              fila_seleccionada  : 0
            };

            try { 
              vm.mapa.mapOptions = {
                  zoom: 8,
                  center: new google.maps.LatLng(20.1947, -88.6783),
                  // Style for Google Maps
                  styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}],
                  mapTypeId: google.maps.MapTypeId.SATELLITE
              };
            }
            catch(err) {
              console.log("google maps no cargado");
            }


            inicia();



            function inicia() {

                  CatMunicipios.find({
                      filter: {
                            order: ['claveMunicipio ASC']
                      }
                  })
                  .$promise
                  .then(function(resp) {
                        angular.forEach(resp, function(reg) {
                            vm.listaMunicipios.push({claveMunicipio: reg.claveMunicipio, nombreMunicipio: reg.nombreMunicipio});
                        });
                        vm.municipioSeleccionado = vm.listaMunicipios[0];
                  });


                  vm.tablaListaPredios.filtro_datos = {
                          filter: {
                              where: vm.tablaListaPredios.condicion,
                              order: ['claveMunicipio ASC','localidad ASC','colonia ASC', 'manzana ASC', 'lote ASC'],
                              limit: vm.tablaListaPredios.registrosPorPagina,
                              skip: vm.tablaListaPredios.paginaActual - 1,
                              include: [
                                {
                                    relation: 'nodos_poligono',
                                    scope: {
                                        order :['index ASC']
                                    }
                                }
                              ]
                          }
                  };

                  vm.predios = {};
                  vm.predioSeleccionado = {};
                  vm.tablaListaPredios.fila_seleccionada = undefined;
                  vm.client = 1;

                  tablaDatosService.obtiene_datos_tabla(VistaPrediosDisponibles, vm.tablaListaPredios)
                  .then(function(respuesta) {

                        vm.tablaListaPredios.totalElementos = respuesta.total_registros;
                        vm.tablaListaPredios.inicio = respuesta.inicio;
                        vm.tablaListaPredios.fin = respuesta.fin;

                        if(vm.tablaListaPredios.totalElementos > 0)
                        {
                            vm.predios = respuesta.datos;
                            vm.predioSeleccionado = vm.predios[0];
                            vm.client = 2;
                            vm.tablaListaPredios.fila_seleccionada = 0;
                        }

                        $timeout(function() {
                            google.maps.event.trigger(vm.mapa.MapaUbicacionPredio,'resize');
                        }, 1000);

                  });

            }


            function muestra_clientes_municipio() {

                  vm.predios = {};
                  vm.predioSeleccionado = {};
                  vm.tablaListaPredios.fila_seleccionada = undefined;
                  vm.localidadSeleccionada = {};
                  vm.client = 1;
                  
                  if(vm.municipioSeleccionado.claveMunicipio == '')
                  {
                        vm.listaLocalidades = [{idLocalidad: 0, nombreLocalidad: 'Seleccione municipio'}];
                        vm.listaColonias = [{idColonia: 0, colonia: 'Seleccione municipio'}];
                        vm.tablaListaPredios.condicion = {};
                  }
                  else
                  {
                        VistaLocalidadesPredios.find({
                            filter: {
                                  where: {
                                      and: [
                                        {'prediosDisponibles': {gt: 0}},
                                        {'claveMunicipio':vm.municipioSeleccionado.claveMunicipio}
                                      ]                              
                                  },
                                  fields: ['idLocalidad','nombreLocalidad'],
                                  order: ['nombreLocalidad ASC']
                            }
                        })
                        .$promise
                        .then(function(resp) {
                              vm.listaLocalidades = resp;
                        });

                        VistaColoniasPredios.find({
                            filter: {
                                  where: {
                                      and: [
                                        {'prediosDisponibles': {gt: 0}},
                                        {'claveMunicipio':vm.municipioSeleccionado.claveMunicipio}
                                      ]                              
                                  },
                                  fields: ['idColonia','colonia'],
                                  order: ['colonia ASC']
                            }
                        })
                        .$promise
                        .then(function(resp) {
                              vm.listaColonias = resp;
                        });

                        vm.tablaListaPredios.condicion = { claveMunicipio: vm.municipioSeleccionado.claveMunicipio};
                  }


                  tablaDatosService.obtiene_datos_tabla(VistaPrediosDisponibles, vm.tablaListaPredios)
                  .then(function(respuesta) {

                        vm.tablaListaPredios.totalElementos = respuesta.total_registros;
                        vm.tablaListaPredios.inicio = respuesta.inicio;
                        vm.tablaListaPredios.fin = respuesta.fin;

                        if(vm.tablaListaPredios.totalElementos > 0)
                        {
                            vm.predios = respuesta.datos;
                            vm.predioSeleccionado = vm.predios[0];
                            vm.client = 2;
                            vm.tablaListaPredios.fila_seleccionada = 0;
                        }

                        vm.mostrarbtnLimpiar = false;
                        vm.nombre_buscar = '';
                  });

            };


            function muestra_clientes_localidad() {

                  vm.predios = {};
                  vm.predioSeleccionado = {};
                  vm.coloniaSeleccionada = undefined;
                  vm.tablaListaPredios.fila_seleccionada = undefined;
                  vm.client = 1;

                  if(vm.localidadSeleccionada.idLocalidad == '')
                      vm.tablaListaPredios.condicion = {};
                  else
                      vm.tablaListaPredios.condicion = { idLocalidad: vm.localidadSeleccionada.idLocalidad};


                  tablaDatosService.obtiene_datos_tabla(VistaPrediosDisponibles, vm.tablaListaPredios)
                  .then(function(respuesta) {

                        vm.tablaListaPredios.totalElementos = respuesta.total_registros;
                        vm.tablaListaPredios.inicio = respuesta.inicio;
                        vm.tablaListaPredios.fin = respuesta.fin;

                        if(vm.tablaListaPredios.totalElementos > 0)
                        {
                            vm.predios = respuesta.datos;
                            vm.predioSeleccionado = vm.predios[0];
                            vm.client = 2;
                            vm.tablaListaPredios.fila_seleccionada = 0;
                        }

                        vm.mostrarbtnLimpiar = false;
                        vm.nombre_buscar = '';
                  });

            };

            function muestra_clientes_colonia() {

                  vm.predios = {};
                  vm.predioSeleccionado = {};
                  vm.localidadSeleccionada = undefined;
                  vm.tablaListaPredios.fila_seleccionada = undefined;
                  vm.client = 1;

                  if(vm.coloniaSeleccionada.idColonia == '')
                      vm.tablaListaPredios.condicion = {};
                  else
                      vm.tablaListaPredios.condicion = { idColonia: vm.coloniaSeleccionada.idColonia};


                  tablaDatosService.obtiene_datos_tabla(VistaPrediosDisponibles, vm.tablaListaPredios)
                  .then(function(respuesta) {

                        vm.tablaListaPredios.totalElementos = respuesta.total_registros;
                        vm.tablaListaPredios.inicio = respuesta.inicio;
                        vm.tablaListaPredios.fin = respuesta.fin;

                        if(vm.tablaListaPredios.totalElementos > 0)
                        {
                            vm.predios = respuesta.datos;
                            vm.predioSeleccionado = vm.predios[0];
                            vm.client = 2;
                            vm.tablaListaPredios.fila_seleccionada = 0;
                        }

                        vm.mostrarbtnLimpiar = false;
                        vm.nombre_buscar = '';
                  });

            };


            function muestraResultadosBusqueda() {

                  vm.predios = {};
                  vm.predioSeleccionado = {};
                  vm.tablaListaPredios.fila_seleccionada = undefined;
                  vm.client = 1;

                  vm.tablaListaPredios.condicion = {
                        busqueda: {
                            regexp: vm.nombre_buscar + '~*/i'
                        }
                  };

                  vm.tablaListaPredios.condicion = {
                        busqueda: {
                            like: '%' + vm.nombre_buscar.toLowerCase() + '%'
                        }
                  };

                  tablaDatosService.obtiene_datos_tabla(VistaPrediosDisponibles, vm.tablaListaPredios)
                  .then(function(respuesta) {

                        vm.tablaListaPredios.totalElementos = respuesta.total_registros;
                        vm.tablaListaPredios.inicio = respuesta.inicio;
                        vm.tablaListaPredios.fin = respuesta.fin;

                        if(vm.tablaListaPredios.totalElementos > 0)
                        {
                            vm.predios = respuesta.datos;
                            vm.predioSeleccionado = vm.predios[0];
                            vm.client = 2;
                            vm.tablaListaPredios.fila_seleccionada = 0;                    
                        }

                        vm.mostrarbtnLimpiar = true;
                        vm.localidadSeleccionada = vm.listaLocalidades[0];
                  });
            };


            function limpiaBusqueda() {

                  vm.predios = {};
                  vm.predioSeleccionado = {};
                  vm.tablaListaPredios.fila_seleccionada = undefined;
                  vm.client = 1;

                  vm.tablaListaPredios.condicion = {};

                  tablaDatosService.obtiene_datos_tabla(VistaPrediosDisponibles, vm.tablaListaPredios)
                  .then(function(respuesta) {

                        vm.tablaListaPredios.totalElementos = respuesta.total_registros;
                        vm.tablaListaPredios.inicio = respuesta.inicio;
                        vm.tablaListaPredios.fin = respuesta.fin;

                        if(vm.tablaListaPredios.totalElementos > 0)
                        {
                            vm.predios = respuesta.datos;
                            vm.predioSeleccionado = vm.predios[0];
                            vm.client = 2;
                            vm.tablaListaPredios.fila_seleccionada = 0;
                        }

                        vm.mostrarbtnLimpiar = false;
                        vm.nombre_buscar = '';
                        vm.localidadSeleccionada = vm.listaLocalidades[0];
                  });

            };


            function cambiarPagina() {

                  if(vm.tablaListaPredios.totalElementos > 0)
                  {
                        tablaDatosService.cambia_pagina(VistaPrediosDisponibles, vm.tablaListaPredios)
                        .then(function(respuesta) {

                            vm.tablaListaPredios.inicio = respuesta.inicio;
                            vm.tablaListaPredios.fin = respuesta.fin;

                            vm.predios = respuesta.datos;
                            vm.predioSeleccionado = vm.predios[0];
                            vm.client = 2;
                            vm.tablaListaPredios.fila_seleccionada = 0;

                        });
                  }
            }


            function muestraDatosPredioActual(seleccion) {

                  var index = vm.predios.indexOf(seleccion);
                  vm.predioSeleccionado = seleccion;
                  vm.client = 2;
                  vm.tablaListaPredios.fila_seleccionada = index;

                  try { 
                          google.maps.event.trigger(vm.mapa.MapaUbicacionPredio,'resize');
                          vm.mapa.MapaUbicacionPredio.setCenter(new google.maps.LatLng(20.1947, -88.6783));
                          vm.mapa.MapaUbicacionPredio.setZoom(17);

/*                          if($scope.gimnasioSeleccionado.ubicacion !== undefined)
                          {
                              $scope.model.MapaUbicacionPredio.setCenter(new google.maps.LatLng($scope.gimnasioSeleccionado.ubicacion.lat, $scope.gimnasioSeleccionado.ubicacion.lng));
                              $scope.model.MapaUbicacionPredio.setZoom(17);

                              var marker = new google.maps.Marker({
                                  map: $scope.model.MapaUbicacionPredio,
                                  position: new google.maps.LatLng($scope.gimnasioSeleccionado.ubicacion.lat, $scope.gimnasioSeleccionado.ubicacion.lng)
                              });

                              $scope.myMarkers.push(marker);              
                          }
*/                  }
                  catch(err) {

                  };

            };


            function eliminar_cliente(predioSeleccionado) {

                  swal({
                    title: "Eliminar cliente",
                    html: '¿Desea eliminar al cliente <strong>'+predioSeleccionado.nombre+' '+predioSeleccionado.apellidos +'</strong> ?',
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "Eliminar",
                    cancelButtonText: "Cancelar",
                    closeOnConfirm: false,
                    closeOnCancel: true
                  }, function(){
                        swal.disableButtons();

                        VistaPrediosDisponibles.sucursales.destroyAll({ id:  predioSeleccionado.id })
                        .$promise
                        .then(function(cliente) {

                              VistaPrediosDisponibles.deleteById({ id: predioSeleccionado.id })
                              .$promise
                              .then(function() {

                                    vm.limpiaBusqueda();
                                    swal('VistaPrediosDisponibles eliminado', '', 'success');

                              });

                        });

                  });

            };
    };

})();