(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('RegistroPrediosPrincipalController', RegistroPrediosPrincipalController);

    RegistroPrediosPrincipalController.$inject = ['$rootScope', '$timeout', 'SweetAlert', '$modal', 'tablaDatosService', 'CatMunicipios', 'VistaLocalidadesPredios', 'VistaColoniasPredios', 'VistaPrediosDatosRegistro'];

    function RegistroPrediosPrincipalController($rootScope, $timeout, SweetAlert, $modal, tablaDatosService, CatMunicipios, VistaLocalidadesPredios, VistaColoniasPredios, VistaPrediosDatosRegistro ) {

            var vm = this;
            vm.listaMunicipios           = [{claveMunicipio: 0, nombreMunicipio: 'Estado'}];
            vm.listaLocalidades          = {};
            vm.listaColonias             = {};
            vm.municipioSeleccionado     = {};
            vm.localidadSeleccionada     = undefined;
            vm.coloniaSeleccionada       = undefined;
            vm.mapa                      = { MapaUbicacionPredio: undefined};

            vm.muestra_predios_municipio = muestra_predios_municipio;
            vm.muestra_predios_localidad = muestra_predios_localidad;
            vm.muestra_predios_colonia   = muestra_predios_colonia;

            vm.muestraDatosPredioActual  = muestraDatosPredioActual;
            vm.muestraResultadosBusqueda = muestraResultadosBusqueda;
            vm.limpiaBusqueda            = limpiaBusqueda;
            vm.cambiarPagina             = cambiarPagina;

            vm.edita_datos_registro      = edita_datos_registro;

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
                  mapTypeId: google.maps.MapTypeId.HYBRID
              };
            }
            catch(err) {
              console.log("google maps no cargado");
            }


            inicia();

            function inicia() {

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
                      vm.infoPredio.open(vm.mapa.MapaUbicacionPredio, vm.marker);
                  });

                  vm.infoPredio = new InfoBox(myOptions);

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

                  tablaDatosService.obtiene_datos_tabla(VistaPrediosDatosRegistro, vm.tablaListaPredios)
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

                            $timeout(function() {
                                google.maps.event.trigger(vm.mapa.MapaUbicacionPredio,'resize');
                                muestraDatosPredioActual(vm.predioSeleccionado);
                            }, 1000);
                        }
                  });

            }


            function muestra_predios_municipio() {

                  vm.predios = {};
                  vm.predioSeleccionado = {};
                  vm.tablaListaPredios.fila_seleccionada = undefined;
                  vm.localidadSeleccionada = undefined;
                  vm.coloniaSeleccionada = undefined;
                  vm.client = 1;
                  vm.tablaListaPredios.paginaActual = 1;
                  vm.tablaListaPredios.inicio = 0;
                  vm.tablaListaPredios.fin = 1;
                  
                  if(vm.municipioSeleccionado.claveMunicipio == 0)
                  {
                        vm.listaLocalidades = {};
                        vm.listaColonias = {};
                        vm.tablaListaPredios.condicion = {};
                  }
                  else
                  {
                        VistaLocalidadesPredios.find({
                            filter: {
                                  where: {
                                      and: [
                                        {'prediosDatosRegistro': {gt: 0}},
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
                                        {'prediosDatosRegistro': {gt: 0}},
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


                  tablaDatosService.obtiene_datos_tabla(VistaPrediosDatosRegistro, vm.tablaListaPredios)
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

                            $timeout(function() {
                                google.maps.event.trigger(vm.mapa.MapaUbicacionPredio,'resize');
                                muestraDatosPredioActual(vm.predioSeleccionado);
                            }, 1000);
                        }
                  });

            };


            function muestra_predios_localidad() {

                  vm.predios = {};
                  vm.predioSeleccionado = {};
                  vm.coloniaSeleccionada = undefined;
                  vm.tablaListaPredios.fila_seleccionada = undefined;
                  vm.client = 1;
                  vm.tablaListaPredios.paginaActual = 1;
                  vm.tablaListaPredios.inicio = 0;
                  vm.tablaListaPredios.fin = 1;

                  vm.tablaListaPredios.condicion = { idLocalidad: vm.localidadSeleccionada.idLocalidad};

                  tablaDatosService.obtiene_datos_tabla(VistaPrediosDatosRegistro, vm.tablaListaPredios)
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

                            $timeout(function() {
                                google.maps.event.trigger(vm.mapa.MapaUbicacionPredio,'resize');
                                muestraDatosPredioActual(vm.predioSeleccionado);
                            }, 1000);
                        }
                  });

            };

            function muestra_predios_colonia() {

                  vm.predios = {};
                  vm.predioSeleccionado = {};
                  vm.localidadSeleccionada = undefined;
                  vm.tablaListaPredios.fila_seleccionada = undefined;
                  vm.client = 1;
                  vm.tablaListaPredios.paginaActual = 1;
                  vm.tablaListaPredios.inicio = 0;
                  vm.tablaListaPredios.fin = 1;

                  vm.tablaListaPredios.condicion = { idColonia: vm.coloniaSeleccionada.idColonia};


                  tablaDatosService.obtiene_datos_tabla(VistaPrediosDatosRegistro, vm.tablaListaPredios)
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

                            $timeout(function() {
                                google.maps.event.trigger(vm.mapa.MapaUbicacionPredio,'resize');
                                muestraDatosPredioActual(vm.predioSeleccionado);
                            }, 1000);
                        }
                  });

            };


            function muestraResultadosBusqueda() {

                  vm.predios = {};
                  vm.predioSeleccionado = {};
                  vm.localidadSeleccionada = undefined;
                  vm.coloniaSeleccionada = undefined;
                  vm.estatusSeleccionado = undefined;
                  vm.tablaListaPredios.fila_seleccionada = undefined;
                  vm.client = 1;
                  vm.tablaListaPredios.paginaActual = 1;
                  vm.tablaListaPredios.inicio = 0;
                  vm.tablaListaPredios.fin = 1;

                  if(vm.municipioSeleccionado.claveMunicipio == 0)
                      vm.tablaListaPredios.condicion = { manzana: vm.nombre_buscar };
                  else {
                      vm.tablaListaPredios.condicion = {
                                        and: [
                                          {claveMunicipio: vm.municipioSeleccionado.claveMunicipio},
                                          {manzana: vm.nombre_buscar}
                                        ]
                                    }
                  }

                  tablaDatosService.obtiene_datos_tabla(VistaPrediosDatosRegistro, vm.tablaListaPredios)
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

                            $timeout(function() {
                                google.maps.event.trigger(vm.mapa.MapaUbicacionPredio,'resize');
                                muestraDatosPredioActual(vm.predioSeleccionado);
                            }, 1000);
                        }

                        vm.mostrarbtnLimpiar = true;
                  });
            };


            function limpiaBusqueda() {

                  vm.predios = {};
                  vm.predioSeleccionado = {};
                  vm.localidadSeleccionada = undefined;
                  vm.coloniaSeleccionada = undefined;
                  vm.tablaListaPredios.fila_seleccionada = undefined;
                  vm.client = 1;
                  vm.tablaListaPredios.paginaActual = 1;
                  vm.tablaListaPredios.inicio = 0;
                  vm.tablaListaPredios.fin = 1;

                  if(vm.municipioSeleccionado.claveMunicipio == 0)
                      vm.tablaListaPredios.condicion = {};
                  else
                      vm.tablaListaPredios.condicion = { claveMunicipio: vm.municipioSeleccionado.claveMunicipio};
                  

                  tablaDatosService.obtiene_datos_tabla(VistaPrediosDatosRegistro, vm.tablaListaPredios)
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

                            $timeout(function() {
                                google.maps.event.trigger(vm.mapa.MapaUbicacionPredio,'resize');
                                muestraDatosPredioActual(vm.predioSeleccionado);
                            }, 1000);
                        }

                        vm.mostrarbtnLimpiar = false;
                        vm.nombre_buscar = '';
                  });

            };


            function cambiarPagina() {

                  if(vm.tablaListaPredios.totalElementos > 0)
                  {
                        tablaDatosService.cambia_pagina(VistaPrediosDatosRegistro, vm.tablaListaPredios)
                        .then(function(respuesta) {

                            vm.tablaListaPredios.inicio = respuesta.inicio;
                            vm.tablaListaPredios.fin = respuesta.fin;

                            vm.predios = respuesta.datos;
                            vm.predioSeleccionado = vm.predios[0];
                            vm.client = 2;
                            vm.tablaListaPredios.fila_seleccionada = 0;

                            $timeout(function() {
                                google.maps.event.trigger(vm.mapa.MapaUbicacionPredio,'resize');
                                muestraDatosPredioActual(vm.predioSeleccionado);
                            }, 1000);
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

                            vm.marker.setMap(null);
                            vm.infoPredio.close();
                            vm.DibujoPredio.setMap(null);

                            if(vm.predioSeleccionado.idTipoLote == 0) {
                                vm.DibujoPredio = new google.maps.Polygon({
                                    strokeColor: "#d1dade", strokeOpacity: 0.8, strokeWeight: 2, fillColor: "#d1dade", fillOpacity: 0.35
                                });
                            }
                            else if(vm.predioSeleccionado.idTipoLote == 1) {
                                vm.DibujoPredio = new google.maps.Polygon({
                                    strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 2, fillColor: "#FF0000", fillOpacity: 0.35
                                });
                            }
                            else if(vm.predioSeleccionado.idTipoLote == 2) {
                                vm.DibujoPredio = new google.maps.Polygon({
                                    strokeColor: "#1ab394", strokeOpacity: 0.8, strokeWeight: 2, fillColor: "#1ab394", fillOpacity: 0.35
                                });
                            }
                            else if(vm.predioSeleccionado.idTipoLote == 3) {
                                vm.DibujoPredio = new google.maps.Polygon({
                                    strokeColor: "#f7a54a", strokeOpacity: 0.8, strokeWeight: 2, fillColor: "#f7a54a", fillOpacity: 0.35
                                });
                            }

                            google.maps.event.addListener(vm.DibujoPredio, "click", function (e) {
                                vm.infoPredio.open(vm.mapa.MapaUbicacionPredio, vm.marker);
                            });


                            var CoordenadasPredio = [];
                            var bounds = new google.maps.LatLngBounds();
                            CoordenadasPredio.length = 0;

                            angular.forEach(seleccion.nodos_poligono, function(nodo) {
                                CoordenadasPredio.push(new google.maps.LatLng(nodo.lat, nodo.long));
                                bounds.extend(new google.maps.LatLng(nodo.lat, nodo.long));
                            });

                            vm.DibujoPredio.setPaths(CoordenadasPredio);

                            var boxText = document.createElement("div");
                            boxText.style.cssText = "border-radius:3px; box-shadow:0 1px 2px #aaa; margin-top: 8px; background: white; padding: 5px; color:black;";
                            boxText.innerHTML = 'Manzana: '+seleccion.manzana +'<br>Lote: '+seleccion.lote;
                            vm.infoPredio.setContent(boxText);
                            vm.marker.setPosition(bounds.getCenter());
                            vm.infoPredio.open(vm.mapa.MapaUbicacionPredio, vm.marker);
                            vm.DibujoPredio.setMap(vm.mapa.MapaUbicacionPredio);
                            vm.mapa.MapaUbicacionPredio.fitBounds(bounds); 
                  }
                  catch(err) {

                  };

            };


            function edita_datos_registro(predioSeleccionado) {

                    vm.predioEditar = {
                        idp                 : predioSeleccionado.idp,
                        direccion           : predioSeleccionado.direccion,
                        claveCatastral      : predioSeleccionado.claveCatastral,
                        folioElectronicoRpp : predioSeleccionado.folioElectronicoRpp,
                        fechaRegistroRpp    : predioSeleccionado.fechaRegistroRpp,
                        lugarRegistroRpp    : predioSeleccionado.lugarRegistroRpp,
                        superficie          : parseFloat(predioSeleccionado.superficie),
                        medidasNorte        : parseFloat(predioSeleccionado.medidasNorte),
                        colindanteNorte     : predioSeleccionado.colindanteNorte,
                        medidasSur          : parseFloat(predioSeleccionado.medidasSur),
                        colindanteSur       : predioSeleccionado.colindanteSur,
                        medidasEste         : parseFloat(predioSeleccionado.medidasEste),
                        colindanteEste      : predioSeleccionado.colindanteEste,
                        medidasOeste        : parseFloat(predioSeleccionado.medidasOeste),
                        colindanteOeste     : predioSeleccionado.colindanteOeste,
                        idTipoLote          : predioSeleccionado.idTipoLote
                    };

                    var modalInstance = $modal.open({
                        templateUrl: 'app/components/seccion_registro_predios/modal-edita-datos-registro-predio.html',
                        windowClass: "animated fadeIn",
                        size: 'lg',
                        controller: 'ModalEditaDatosRegistroPredioController as vm',
                        resolve: {
                          predioEditar: function () { return vm.predioEditar }
                        }

                    });

                    modalInstance.result.then(function (respuesta) {

                        vm.predioSeleccionado.direccion           = respuesta.direccion,
                        vm.predioSeleccionado.claveCatastral      = respuesta.claveCatastral,
                        vm.predioSeleccionado.folioElectronicoRpp = respuesta.folioElectronicoRpp,
                        vm.predioSeleccionado.fechaRegistroRpp    = respuesta.fechaRegistroRpp,
                        vm.predioSeleccionado.lugarRegistroRpp    = respuesta.lugarRegistroRpp,
                        vm.predioSeleccionado.superficie          = respuesta.superficie,
                        vm.predioSeleccionado.medidasNorte        = respuesta.medidasNorte,
                        vm.predioSeleccionado.colindanteNorte     = respuesta.colindanteNorte,
                        vm.predioSeleccionado.medidasSur          = respuesta.medidasSur,
                        vm.predioSeleccionado.colindanteSur       = respuesta.colindanteSur,
                        vm.predioSeleccionado.medidasEste         = respuesta.medidasEste,
                        vm.predioSeleccionado.colindanteEste      = respuesta.colindanteEste,
                        vm.predioSeleccionado.medidasOeste        = respuesta.medidasOeste,
                        vm.predioSeleccionado.colindanteOeste     = respuesta.colindanteOeste,
                        vm.predioSeleccionado.idTipoLote          = respuesta.idTipoLote,
                        vm.predioSeleccionado.tipoLote            = respuesta.tipoLote
                    }, function () {
                    });
            };

    };

})();