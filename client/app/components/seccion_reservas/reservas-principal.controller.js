(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('ReservasPrincipalController', ReservasPrincipalController);

    ReservasPrincipalController.$inject = ['$timeout', '$modal', 'tablaDatosService', 'CatMunicipios', 'Reserva', 'CatEstatusReserva'];

    function ReservasPrincipalController($timeout, $modal, tablaDatosService, CatMunicipios, Reserva, CatEstatusReserva ) {

            var vm = this;
            vm.listaMunicipios       = [{claveMunicipio: -1, nombreMunicipio: 'Estado'},{claveMunicipio: 0, nombreMunicipio: 'Sin municipio'}];
            vm.listaEstatus          = [];
            vm.municipioSeleccionado = {};
            vm.estatusSeleccionado   = undefined;
            vm.mapa                  = { MapaUbicacionPredio: undefined};

            vm.muestra_reservas_municipio = muestra_reservas_municipio;
            vm.muestra_reserva_estatus    = muestra_reserva_estatus;
            vm.muestraDatosReservaActual  = muestraDatosReservaActual;

            vm.muestraResultadosBusqueda  = muestraResultadosBusqueda;
            vm.limpiaBusqueda             = limpiaBusqueda;
            vm.cambiarPagina              = cambiarPagina;
            vm.cambia_estatus_reserva     = cambia_estatus_reserva;

            vm.tablaListaReservas = {
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
                  mapTypeId: google.maps.MapTypeId.HYBRID
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

                  CatEstatusReserva.find({
                      filter: {
                            fields: ['estatusReserva','descripcionEstatusReserva'],
                            order: ['descripcionEstatusReserva ASC']
                      }
                  })
                  .$promise
                  .then(function(resp) {
                        
                        vm.listaEstatus.push({estatusReserva: 0, descripcionEstatusReserva: 'Todos'});
                        angular.forEach(resp, function(reg) {
                            vm.listaEstatus.push({estatusReserva: reg.estatusReserva, descripcionEstatusReserva: reg.descripcionEstatusReserva});
                        });
                        vm.estatusSeleccionado = vm.listaEstatus[0];
                  });

                  vm.tablaListaReservas.filtro_datos = {
                          filter: {
                              where: vm.tablaListaReservas.condicion,
                              order: ['claveMunicipio ASC','nombre ASC'],
                              limit: vm.tablaListaReservas.registrosPorPagina,
                              skip: vm.tablaListaReservas.paginaActual - 1,
                              include: ['municipio_pertenece','situacion_reserva']
                          }
                  };

                  vm.reservas = {};
                  vm.reservaSeleccionada = {};
                  vm.tablaListaReservas.fila_seleccionada = undefined;
                  vm.client = 1;

                  tablaDatosService.obtiene_datos_tabla(Reserva, vm.tablaListaReservas)
                  .then(function(respuesta) {

                        vm.tablaListaReservas.totalElementos = respuesta.total_registros;
                        vm.tablaListaReservas.inicio = respuesta.inicio;
                        vm.tablaListaReservas.fin = respuesta.fin;

                        if(vm.tablaListaReservas.totalElementos > 0)
                        {
                            vm.reservas = respuesta.datos;
                            vm.reservaSeleccionada = vm.reservas[0];
                            vm.client = 2;
                            vm.tablaListaReservas.fila_seleccionada = 0;

                            $timeout(function() {
                                google.maps.event.trigger(vm.mapa.MapaUbicacionPredio,'resize');
                                muestraDatosReservaActual(vm.reservaSeleccionada);
                            }, 1000);
                        }
                  });

                            vm.DibujoPredio = new google.maps.Polygon({
                                strokeColor: "#FF0000",
                                strokeOpacity: 0.8,
                                strokeWeight: 2,
                                fillColor: "#FF0000",
                                fillOpacity: 0.35
                            });

                            var boxText = document.createElement("div");
                            boxText.style.cssText = "border: 1px solid gray; margin-top: 8px; background: #FFFFFF; padding: 5px; color:black;";
                            boxText.innerHTML = "";

                            var myOptions = {
                                     content: boxText
                                    ,disableAutoPan: false
                                    ,maxWidth: 0
                                    ,pixelOffset: new google.maps.Size(-60, 20)
                                    ,zIndex: null
                                    ,boxStyle: { 
                                      background: "url('assets/img/tipbox.gif') no-repeat"
                                      ,opacity: 0.75
                                      ,width: "110px"
                                     }
                                    ,closeBoxMargin: "10px 2px 2px 2px"
                                    ,closeBoxURL: "assets/img/cerrar.png"
                                    ,infoBoxClearance: new google.maps.Size(1, 1)
                                    ,isHidden: false
                                    ,pane: "floatPane"
                                    ,enableEventPropagation: false
                            };

                            vm.marker = new google.maps.Marker({
                                map: vm.mapa.MapaUbicacionPredio,
                                draggable: false,
                                position: new google.maps.LatLng(18.520766802, -88.299891532),
                                visible: false
                            });

                            google.maps.event.addListener(vm.DibujoPredio, "click", function (e) {
                                infoPredio.open(vm.mapa.MapaUbicacionPredio, vm.marker);
                            });

                            vm.infoPredio = new InfoBox(myOptions);
            }


            function muestra_reservas_municipio() {

                  vm.reservas = {};
                  vm.reservaSeleccionada = {};
                  vm.tablaListaReservas.fila_seleccionada = undefined;
                  vm.estatusSeleccionado = vm.listaEstatus[0];
                  vm.client = 1;
                  vm.tablaListaReservas.paginaActual = 1;
                  vm.tablaListaReservas.inicio = 0;
                  vm.tablaListaReservas.fin = 1;
                  vm.mostrarbtnLimpiar = false;
                  vm.nombre_buscar = '';
                  
                  if(vm.municipioSeleccionado.claveMunicipio == -1)
                        vm.tablaListaReservas.condicion = {};
                  else
                        vm.tablaListaReservas.condicion = { claveMunicipio: vm.municipioSeleccionado.claveMunicipio};

                  tablaDatosService.obtiene_datos_tabla(Reserva, vm.tablaListaReservas)
                  .then(function(respuesta) {

                        vm.tablaListaReservas.totalElementos = respuesta.total_registros;
                        vm.tablaListaReservas.inicio = respuesta.inicio;
                        vm.tablaListaReservas.fin = respuesta.fin;

                        if(vm.tablaListaReservas.totalElementos > 0)
                        {
                            vm.reservas = respuesta.datos;
                            vm.reservaSeleccionada = vm.reservas[0];
                            vm.client = 2;
                            vm.tablaListaReservas.fila_seleccionada = 0;

                            $timeout(function() {
                                google.maps.event.trigger(vm.mapa.MapaUbicacionPredio,'resize');
                                muestraDatosReservaActual(vm.reservaSeleccionada);
                            }, 1000);
                        }

                        vm.mostrarbtnLimpiar = false;
                        vm.nombre_buscar = '';
                  });

            };


            function muestra_reserva_estatus() {

                  vm.reservas = {};
                  vm.reservaSeleccionada = {};
                  vm.tablaListaReservas.fila_seleccionada = undefined;
                  vm.client = 1;
                  vm.tablaListaReservas.paginaActual = 1;
                  vm.tablaListaReservas.inicio = 0;
                  vm.tablaListaReservas.fin = 1;


                  if(vm.estatusSeleccionado.estatusReserva == 0)
                  {
                      if(vm.municipioSeleccionado.claveMunicipio == -1)
                            vm.tablaListaReservas.condicion = {};
                      else
                            vm.tablaListaReservas.condicion = { claveMunicipio: vm.municipioSeleccionado.claveMunicipio};
                  }
                  else
                  {
                      if(vm.municipioSeleccionado.claveMunicipio == -1)
                            vm.tablaListaReservas.condicion = {estatusReserva: vm.estatusSeleccionado.estatusReserva};
                      else
                      {
                            vm.tablaListaReservas.condicion = {
                                                                and: [
                                                                  {claveMunicipio: vm.municipioSeleccionado.claveMunicipio},
                                                                  {estatusReserva: vm.estatusSeleccionado.estatusReserva}
                                                                ]
                                                             };
                      }
                  }


                  tablaDatosService.obtiene_datos_tabla(Reserva, vm.tablaListaReservas)
                  .then(function(respuesta) {

                        vm.tablaListaReservas.totalElementos = respuesta.total_registros;
                        vm.tablaListaReservas.inicio = respuesta.inicio;
                        vm.tablaListaReservas.fin = respuesta.fin;

                        if(vm.tablaListaReservas.totalElementos > 0)
                        {
                            vm.reservas = respuesta.datos;
                            vm.reservaSeleccionada = vm.reservas[0];
                            vm.client = 2;
                            vm.tablaListaReservas.fila_seleccionada = 0;

                            $timeout(function() {
                                google.maps.event.trigger(vm.mapa.MapaUbicacionPredio,'resize');
                                muestraDatosReservaActual(vm.reservaSeleccionada);
                            }, 1000);
                        }

                        vm.mostrarbtnLimpiar = false;
                        vm.nombre_buscar = '';
                  });

            };


            function muestraResultadosBusqueda() {

                  vm.reservas = {};
                  vm.reservaSeleccionada = {};
                  vm.tablaListaReservas.fila_seleccionada = undefined;
                  vm.client = 1;
                  vm.tablaListaReservas.paginaActual = 1;
                  vm.tablaListaReservas.inicio = 0;
                  vm.tablaListaReservas.fin = 1;

                  if(vm.municipioSeleccionado.claveMunicipio == -1)
                      vm.tablaListaReservas.condicion = {
                                                            nombre: {
                                                              like: '%' + vm.nombre_buscar + '%'
                                                            }                        
                                                        };
                  else {
                      vm.tablaListaReservas.condicion = {
                                        and: [
                                          {claveMunicipio: vm.municipioSeleccionado.claveMunicipio},
                                          {
                                            nombre: {
                                              like: '%' + vm.nombre_buscar + '%',
                                            }
                                          }
                                        ]
                                    }
                  }

                  tablaDatosService.obtiene_datos_tabla(Reserva, vm.tablaListaReservas)
                  .then(function(respuesta) {

                        vm.tablaListaReservas.totalElementos = respuesta.total_registros;
                        vm.tablaListaReservas.inicio = respuesta.inicio;
                        vm.tablaListaReservas.fin = respuesta.fin;

                        if(vm.tablaListaReservas.totalElementos > 0)
                        {
                            vm.reservas = respuesta.datos;
                            vm.reservaSeleccionada = vm.reservas[0];
                            vm.client = 2;
                            vm.tablaListaReservas.fila_seleccionada = 0;                    

                            $timeout(function() {
                                google.maps.event.trigger(vm.mapa.MapaUbicacionPredio,'resize');
                                muestraDatosReservaActual(vm.reservaSeleccionada);
                            }, 1000);
                        }

                        vm.mostrarbtnLimpiar = true;
                  });
            };


            function limpiaBusqueda() {

                  vm.reservas = {};
                  vm.reservaSeleccionada = {};
                  vm.estatusSeleccionado = undefined;
                  vm.tablaListaReservas.fila_seleccionada = undefined;
                  vm.client = 1;
                  vm.tablaListaReservas.paginaActual = 1;
                  vm.tablaListaReservas.inicio = 0;
                  vm.tablaListaReservas.fin = 1;

                  if(vm.municipioSeleccionado.claveMunicipio == -1)
                      vm.tablaListaReservas.condicion = {};
                  else
                      vm.tablaListaReservas.condicion = { claveMunicipio: vm.municipioSeleccionado.claveMunicipio};


                  tablaDatosService.obtiene_datos_tabla(Reserva, vm.tablaListaReservas)
                  .then(function(respuesta) {

                        vm.tablaListaReservas.totalElementos = respuesta.total_registros;
                        vm.tablaListaReservas.inicio = respuesta.inicio;
                        vm.tablaListaReservas.fin = respuesta.fin;

                        if(vm.tablaListaReservas.totalElementos > 0)
                        {
                            vm.reservas = respuesta.datos;
                            vm.reservaSeleccionada = vm.reservas[0];
                            vm.client = 2;
                            vm.tablaListaReservas.fila_seleccionada = 0;

                            $timeout(function() {
                                google.maps.event.trigger(vm.mapa.MapaUbicacionPredio,'resize');
                                muestraDatosReservaActual(vm.reservaSeleccionada);
                            }, 1000);
                        }

                        vm.mostrarbtnLimpiar = false;
                        vm.nombre_buscar = '';
                  });

            };


            function cambiarPagina() {

                  if(vm.tablaListaReservas.totalElementos > 0)
                  {
                        tablaDatosService.cambia_pagina(Reserva, vm.tablaListaReservas)
                        .then(function(respuesta) {

                            vm.tablaListaReservas.inicio = respuesta.inicio;
                            vm.tablaListaReservas.fin = respuesta.fin;

                            vm.reservas = respuesta.datos;
                            vm.reservaSeleccionada = vm.reservas[0];
                            vm.client = 2;
                            vm.tablaListaReservas.fila_seleccionada = 0;

                            $timeout(function() {
                                google.maps.event.trigger(vm.mapa.MapaUbicacionPredio,'resize');
                                muestraDatosReservaActual(vm.reservaSeleccionada);
                            }, 1000);
                        });
                  }
            }


            function muestraDatosReservaActual(seleccion) {

                  var index = vm.reservas.indexOf(seleccion);
                  vm.reservaSeleccionada = seleccion;
                  vm.client = 2;
                  vm.tablaListaReservas.fila_seleccionada = index;

                  Reserva.geometria({
                      id:seleccion.objectid,
                      filter: {
                            order: ['index ASC']
                      }
                  })
                  .$promise
                  .then(function(resp) {
      
                        try { 
                                  google.maps.event.trigger(vm.mapa.MapaUbicacionPredio,'resize');

                                  vm.marker.setMap(null);
                                  vm.infoPredio.close();
                                  vm.DibujoPredio.setMap(null);

                                  if(vm.reservaSeleccionada.estatusReserva == 0) {
                                      vm.DibujoPredio = new google.maps.Polygon({
                                          strokeColor: "#d1dade", strokeOpacity: 0.8, strokeWeight: 2, fillColor: "#d1dade", fillOpacity: 0.35
                                      });
                                  }
                                  else if(vm.reservaSeleccionada.estatusReserva == 1) {
                                      vm.DibujoPredio = new google.maps.Polygon({
                                          strokeColor: "#1ab394", strokeOpacity: 0.8, strokeWeight: 2, fillColor: "#1ab394", fillOpacity: 0.35
                                      });
                                  }
                                  else if(vm.reservaSeleccionada.estatusReserva == 2) {
                                      vm.DibujoPredio = new google.maps.Polygon({
                                          strokeColor: "#1c84c6", strokeOpacity: 0.8, strokeWeight: 2, fillColor: "#1c84c6", fillOpacity: 0.35
                                      });
                                  }
                                  else if(vm.reservaSeleccionada.estatusReserva == 3) {
                                      vm.DibujoPredio = new google.maps.Polygon({
                                          strokeColor: "#f7a54a", strokeOpacity: 0.8, strokeWeight: 2, fillColor: "#f7a54a", fillOpacity: 0.35
                                      });
                                  }
                                  else if(vm.reservaSeleccionada.estatusReserva == 4) {
                                      vm.DibujoPredio = new google.maps.Polygon({
                                          strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 2, fillColor: "#FF0000", fillOpacity: 0.35
                                      });
                                  }

                                  var CoordenadasPredio = [];
                                  var bounds = new google.maps.LatLngBounds();
                                  CoordenadasPredio.length = 0;

                                  angular.forEach(resp, function(nodo) {
                                      CoordenadasPredio.push(new google.maps.LatLng(nodo.lat, nodo.long));
                                      bounds.extend(new google.maps.LatLng(nodo.lat, nodo.long));
                                  });

                                  vm.DibujoPredio.setPaths(CoordenadasPredio);

                                  var boxText = document.createElement("div");
                                  boxText.style.cssText = "border-radius:3px; box-shadow:0 1px 2px #aaa; margin-top: 8px; background: white; padding: 5px; color:black;";
                                  boxText.innerHTML = 'Nombre: '+seleccion.nombre;
                                  vm.infoPredio.setContent(boxText);
                                  vm.marker.setPosition(bounds.getCenter());
                                  vm.infoPredio.open(vm.mapa.MapaUbicacionPredio, vm.marker);
                                  vm.DibujoPredio.setMap(vm.mapa.MapaUbicacionPredio);
                                  vm.mapa.MapaUbicacionPredio.fitBounds(bounds); 
                        }
                        catch(err) {

                        };
                        
                  });

            };


            function cambia_estatus_reserva(reservaSeleccionada) {

                    vm.reservaEditar = {
                        idreserva            : reservaSeleccionada.objectid,
                        estatusReserva       : reservaSeleccionada.estatusReserva,
                        nombre               : reservaSeleccionada.nombre,
                        superficieRegistrada : parseFloat(reservaSeleccionada.superficieRegistrada),
                        observacionesReserva : reservaSeleccionada.observacionesReserva
                   };

                    var modalInstance = $modal.open({
                        templateUrl: 'app/components/seccion_reservas/modal-edita-datos-reserva.html',
                        windowClass: "animated fadeIn",
                        controller: 'ModalEditaDatosReservaController as vm',
                        resolve: {
                          reservaEditar: function () { return vm.reservaEditar }
                        }

                    });

                    modalInstance.result.then(function (respuesta) {
                        vm.reservaSeleccionada.estatusReserva                              = respuesta.estatusReserva;
                        vm.reservaSeleccionada.situacion_reserva.estatusReserva            = respuesta.estatusReserva;
                        vm.reservaSeleccionada.situacion_reserva.descripcionEstatusReserva = respuesta.descripcionEstatusReserva;
                        vm.reservaSeleccionada.nombre                                      = respuesta.nombre;
                        vm.reservaSeleccionada.superficieRegistrada                        = respuesta.superficieRegistrada;
                        vm.reservaSeleccionada.observacionesReserva                        = respuesta.observacionesReserva;
                    }, function () {
                    });

            };

    };

})();