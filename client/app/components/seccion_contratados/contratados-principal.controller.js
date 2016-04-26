(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('ContratadosPrincipalController', ContratadosPrincipalController);

    ContratadosPrincipalController.$inject = ['$rootScope', '$timeout', '$modal', 'tablaDatosService', 'CatMunicipios', 'VistaLocalidadesPredios', 'VistaColoniasPredios', 'VistaPrediosContratados'];

    function ContratadosPrincipalController($rootScope, $timeout, $modal, tablaDatosService, CatMunicipios, VistaLocalidadesPredios, VistaColoniasPredios, VistaPrediosContratados ) {

            var vm = this;
            vm.listaMunicipios                = [{claveMunicipio: 0, nombreMunicipio: 'Estado'}];
            vm.listaLocalidades               = [{idLocalidad: 0, nombreLocalidad: 'Seleccione municipio'}];
            vm.listaColonias                  = [{idColonia: 0, colonia: 'Seleccione municipio'}];
            vm.municipioSeleccionado          = {};
            vm.localidadSeleccionada          = undefined;
            vm.coloniaSeleccionada            = undefined;
            vm.mapa                           = { MapaUbicacionPredio: undefined};

            vm.edicionContratadosBeneficiario = $rootScope.currentUser.edicionContratadosBeneficiario;
            vm.edicionContratadosFinanciero   = $rootScope.currentUser.edicionContratadosFinanciero;
            vm.edicionContratadosJuridico     = $rootScope.currentUser.edicionContratadosJuridico;

            vm.muestra_predios_municipio      = muestra_predios_municipio;
            vm.muestra_predios_localidad      = muestra_predios_localidad;
            vm.muestra_predios_colonia        = muestra_predios_colonia;
            vm.muestraResultadosBusqueda      = muestraResultadosBusqueda;
            vm.limpiaBusqueda                 = limpiaBusqueda;
            vm.muestraDatosPredioActual       = muestraDatosPredioActual;
            vm.cambiarPagina                  = cambiarPagina;

            vm.edita_datos_beneficiario       = edita_datos_beneficiario;
            vm.edita_datos_financieros        = edita_datos_financieros;
            vm.edita_datos_juridicos          = edita_datos_juridicos;
            vm.mueve_predios_titulados        = mueve_predios_titulados;

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

                  tablaDatosService.obtiene_datos_tabla(VistaPrediosContratados, vm.tablaListaPredios)
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
                                        {'prediosContratados': {gt: 0}},
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
                                        {'prediosContratados': {gt: 0}},
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


                  tablaDatosService.obtiene_datos_tabla(VistaPrediosContratados, vm.tablaListaPredios)
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


            function muestra_predios_localidad() {

                  vm.predios = {};
                  vm.predioSeleccionado = {};
                  vm.coloniaSeleccionada = undefined;
                  vm.tablaListaPredios.fila_seleccionada = undefined;
                  vm.client = 1;
                  vm.tablaListaPredios.paginaActual = 1;
                  vm.tablaListaPredios.inicio = 0;
                  vm.tablaListaPredios.fin = 1;

                  if(vm.localidadSeleccionada.idLocalidad == '')
                      vm.tablaListaPredios.condicion = {};
                  else
                      vm.tablaListaPredios.condicion = { idLocalidad: vm.localidadSeleccionada.idLocalidad};


                  tablaDatosService.obtiene_datos_tabla(VistaPrediosContratados, vm.tablaListaPredios)
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

            function muestra_predios_colonia() {

                  vm.predios = {};
                  vm.predioSeleccionado = {};
                  vm.localidadSeleccionada = undefined;
                  vm.tablaListaPredios.fila_seleccionada = undefined;
                  vm.client = 1;
                  vm.tablaListaPredios.paginaActual = 1;
                  vm.tablaListaPredios.inicio = 0;
                  vm.tablaListaPredios.fin = 1;

                  if(vm.coloniaSeleccionada.idColonia == '')
                      vm.tablaListaPredios.condicion = {};
                  else
                      vm.tablaListaPredios.condicion = { idColonia: vm.coloniaSeleccionada.idColonia};


                  tablaDatosService.obtiene_datos_tabla(VistaPrediosContratados, vm.tablaListaPredios)
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


            function muestraResultadosBusqueda() {

                  vm.predios = {};
                  vm.predioSeleccionado = {};
                  vm.tablaListaPredios.fila_seleccionada = undefined;
                  vm.client = 1;
                  vm.tablaListaPredios.paginaActual = 1;
                  vm.tablaListaPredios.inicio = 0;
                  vm.tablaListaPredios.fin = 1;

                  if(vm.localidadSeleccionada == undefined && vm.coloniaSeleccionada == undefined)
                  {
                      if(vm.municipioSeleccionado.claveMunicipio == 0)
                          vm.tablaListaPredios.condicion = { manzana: vm.nombre_buscar };
                      else {
                          var temp = vm.tablaListaPredios.condicion;
                          vm.tablaListaPredios.condicion = {
                                            and: [
                                              temp,
                                              {manzana: vm.nombre_buscar}
                                            ]                              
                                        }
                      }
                  } 
                  else
                  {
                    var temp = vm.tablaListaPredios.condicion;
                    vm.tablaListaPredios.condicion = {
                                      and: [
                                        temp,
                                        {manzana: vm.nombre_buscar}
                                      ]                              
                                  }

                  }

                  tablaDatosService.obtiene_datos_tabla(VistaPrediosContratados, vm.tablaListaPredios)
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
                  vm.tablaListaPredios.fila_seleccionada = undefined;
                  vm.client = 1;
                  vm.tablaListaPredios.paginaActual = 1;
                  vm.tablaListaPredios.inicio = 0;
                  vm.tablaListaPredios.fin = 1;

                  if(vm.localidadSeleccionada == undefined && vm.coloniaSeleccionada == undefined)
                  {
                      if(vm.municipioSeleccionado.claveMunicipio == 0)
                          vm.tablaListaPredios.condicion = {};
                      else
                          vm.tablaListaPredios.condicion = { claveMunicipio: vm.municipioSeleccionado.claveMunicipio};
                  } 
                  else if(vm.localidadSeleccionada !== undefined)
                      vm.tablaListaPredios.condicion = { idLocalidad: vm.localidadSeleccionada.idLocalidad};
                  else
                      vm.tablaListaPredios.condicion = { idColonia: vm.coloniaSeleccionada.idColonia};
                  

                  tablaDatosService.obtiene_datos_tabla(VistaPrediosContratados, vm.tablaListaPredios)
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
                        tablaDatosService.cambia_pagina(VistaPrediosContratados, vm.tablaListaPredios)
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

                            if(vm.predioSeleccionado.idtipoLote == 0) {
                                vm.DibujoPredio = new google.maps.Polygon({
                                    strokeColor: "#d1dade", strokeOpacity: 0.8, strokeWeight: 2, fillColor: "#d1dade", fillOpacity: 0.35
                                });
                            }
                            else if(vm.predioSeleccionado.idtipoLote == 1) {
                                vm.DibujoPredio = new google.maps.Polygon({
                                    strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 2, fillColor: "#FF0000", fillOpacity: 0.35
                                });
                            }
                            else if(vm.predioSeleccionado.idtipoLote == 2) {
                                vm.DibujoPredio = new google.maps.Polygon({
                                    strokeColor: "#1ab394", strokeOpacity: 0.8, strokeWeight: 2, fillColor: "#1ab394", fillOpacity: 0.35
                                });
                            }
                            else if(vm.predioSeleccionado.idtipoLote == 3) {
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


            function edita_datos_beneficiario(predioSeleccionado) {

                    vm.predioEditar = {
                        idpredio              : predioSeleccionado.id,
                        beneficiario          : predioSeleccionado.beneficiario,
                        conyugue              : predioSeleccionado.conyugue,
                        numeroExpediente      : predioSeleccionado.numeroExpediente,
                        idModalidadPrograma   : predioSeleccionado.idModalidadPrograma,
                        idDocumentoAsignacion : predioSeleccionado.idDocumentoAsignacion,
                        observacionesSocial   : predioSeleccionado.observacionesSocial
                   };

                    var modalInstance = $modal.open({
                        templateUrl: 'app/components/seccion_contratados/modal-edita-datos-beneficiario.html',
                        windowClass: "animated fadeIn",
                        size: 'lg',
                        controller: 'ModalEditaDatosBeneficiarioController as vm',
                        resolve: {
                          predioEditar: function () { return vm.predioEditar }
                        }

                    });

                    modalInstance.result.then(function (respuesta) {
                        vm.predioSeleccionado.beneficiario          = respuesta.beneficiario;
                        vm.predioSeleccionado.conyugue              = respuesta.conyugue;
                        vm.predioSeleccionado.numeroExpediente      = respuesta.numeroExpediente;
                        vm.predioSeleccionado.idModalidadPrograma   = respuesta.idModalidadPrograma;
                        vm.predioSeleccionado.modalidadPrograma     = respuesta.modalidadPrograma;
                        vm.predioSeleccionado.idDocumentoAsignacion = respuesta.idDocumentoAsignacion;
                        vm.predioSeleccionado.documentoAsignacion   = respuesta.documentoAsignacion;
                        vm.predioSeleccionado.observacionesSocial   = respuesta.observacionesSocial;
                        vm.predioSeleccionado.fechaActBeneficiario  = new Date(respuesta.fechaActBeneficiario);
                    }, function () {
                    });
            };


            function edita_datos_financieros(predioSeleccionado) {

                    vm.predioEditar = {
                        idpredio                  : predioSeleccionado.id,
                        numContrato               : predioSeleccionado.numContrato,
                        fechaContrato             : predioSeleccionado.fechaContrato,
                        fechaInicioPago           : predioSeleccionado.fechaInicioPago,
                        costoPredio               : predioSeleccionado.costoPredio,
                        enganche                  : predioSeleccionado.enganche,
                        subsidio                  : predioSeleccionado.subsidio,
                        pagosAnticipados          : predioSeleccionado.pagosAnticipados,
                        saldoInsolutoInicial      : predioSeleccionado.saldoInsolutoInicial,
                        montoMensual              : predioSeleccionado.montoMensual,
                        numMensualidades          : predioSeleccionado.numMensualidades,
                        numMensualidadesAtrasadas : predioSeleccionado.numMensualidadesAtrasadas,
                        moratorios                : predioSeleccionado.moratorios,
                        idSituacionFinanciera     : predioSeleccionado.idSituacionFinanciera,
                        observacionesFinanciero   : predioSeleccionado.observacionesFinanciero
                    };

                    var modalInstance = $modal.open({
                        templateUrl: 'app/components/seccion_contratados/modal-edita-datos-financieros.html',
                        windowClass: "animated fadeIn",
                        size: 'lg',
                        controller: 'ModalEditaDatosFinancierosController as vm',
                        resolve: {
                          predioEditar: function () { return vm.predioEditar }
                        }

                    });

                    modalInstance.result.then(function (respuesta) {
                        vm.predioSeleccionado.numContrato               = respuesta.numContrato;
                        vm.predioSeleccionado.fechaContrato             = new Date(respuesta.fechaContrato);
                        vm.predioSeleccionado.fechaInicioPago           = new Date(respuesta.fechaInicioPago);
                        vm.predioSeleccionado.costoPredio               = respuesta.costoPredio;
                        vm.predioSeleccionado.enganche                  = respuesta.enganche;
                        vm.predioSeleccionado.subsidio                  = respuesta.subsidio;
                        vm.predioSeleccionado.pagosAnticipados          = respuesta.pagosAnticipados;
                        vm.predioSeleccionado.saldoInsolutoInicial      = respuesta.saldoInsolutoInicial;
                        vm.predioSeleccionado.montoMensual              = respuesta.montoMensual;
                        vm.predioSeleccionado.numMensualidades          = respuesta.numMensualidades;
                        vm.predioSeleccionado.numMensualidadesAtrasadas = respuesta.numMensualidadesAtrasadas;
                        vm.predioSeleccionado.moratorios                = respuesta.moratorios;
                        vm.predioSeleccionado.idSituacionFinanciera     = respuesta.idSituacionFinanciera;
                        vm.predioSeleccionado.situacionFinanciera       = respuesta.situacionFinanciera;
                        vm.predioSeleccionado.observacionesFinanciero   = respuesta.observacionesFinanciero;
                        vm.predioSeleccionado.fechaActFinanciera        = new Date(respuesta.fechaActFinanciera);
                    }, function () {
                    });
            };



            function edita_datos_juridicos(predioSeleccionado) {

                    vm.predioEditar = {
                        idpredio              : predioSeleccionado.id,
                        idSituacionJuridica   : predioSeleccionado.idSituacionJuridica,
                        observacionesJuridico : predioSeleccionado.observacionesJuridico
                    };

                    var modalInstance = $modal.open({
                        templateUrl: 'app/components/seccion_contratados/modal-edita-datos-juridicos.html',
                        windowClass: "animated fadeIn",
                        size: 'lg',
                        controller: 'ModalEditaDatosJuridicosController as vm',
                        resolve: {
                          predioEditar: function () { return vm.predioEditar }
                        }

                    });

                    modalInstance.result.then(function (respuesta) {
                        vm.predioSeleccionado.idSituacionJuridica   = respuesta.idSituacionJuridica;
                        vm.predioSeleccionado.situacionJuridica     = respuesta.situacionJuridica;
                        vm.predioSeleccionado.observacionesJuridico = respuesta.observacionesJuridico;
                        vm.predioSeleccionado.fechaActJuridica      = new Date(respuesta.fechaActJuridica);
                    }, function () {
                    });
            };



            function mueve_predios_titulados(predioSeleccionado) {

                    vm.predioEditar = {
                        idpredio : predioSeleccionado.id
                    };

                    var modalInstance = $modal.open({
                        templateUrl: 'app/components/seccion_contratados/modal-mueve-predios-titulados.html',
                        windowClass: "animated fadeIn",
                        controller: 'ModalMuevePrediosTituladosController as vm',
                        resolve: {
                          predioEditar: function () { return vm.predioEditar }
                        }

                    });

                    modalInstance.result.then(function (respuesta) {
                      
                      vm.limpiaBusqueda();
                    
                    }, function () {
                    });
            };


    };

})();