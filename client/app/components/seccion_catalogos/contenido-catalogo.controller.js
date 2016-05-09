(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('ContenidoCatalogoController', ContenidoCatalogoController);

    ContenidoCatalogoController.$inject = ['$stateParams', '$modal', 'tablaDatosService', 'CatEstatusPredioDisponibles', 'CatEstatusReserva', 'CatEstatusTitulo', 'CatModalidadPrograma', 'CatSituacionFinanciera', 'CatSituacionJuridica', 'CatTipoDocumentoAsignacion'];

    function ContenidoCatalogoController($stateParams, $modal, tablaDatosService, CatEstatusPredioDisponibles, CatEstatusReserva, CatEstatusTitulo, CatModalidadPrograma, CatSituacionFinanciera, CatSituacionJuridica, CatTipoDocumentoAsignacion ) {

            var vm = this;
            vm.descripcion_catalogo = '';
            vm.listaRegistros   = [];
            vm.cambiarPagina    = cambiarPagina;
            vm.edita_registro   = edita_registro;
            vm.nuevo_registro   = nuevo_registro;
            vm.elimina_registro = elimina_registro;

            vm.tablaCatalogo = {
              totalElementos     : 0,
              paginaActual       : 1,
              registrosPorPagina : 10,
              inicio             : 0,
              fin                : 1,
              condicion          : {},
              filtro_datos       : {},
              fila_seleccionada  : 0
            };

            inicia();

            function inicia() {

                  vm.tablaCatalogo.filtro_datos = {
                          filter: {
                              where: vm.tablaCatalogo.condicion,
                              order: ['idEstatusDisponibles ASC'],
                              limit: vm.tablaCatalogo.registrosPorPagina,
                              skip: vm.tablaCatalogo.paginaActual - 1,
                          }
                  };

                  if($stateParams.catalogo == 'estatus_disponibles')
                  {
                      vm.descripcion_catalogo = 'Catálogo: Estatus de predios disponibles';
                      vm.CatalogoMostrar = CatEstatusPredioDisponibles;
                      vm.tablaCatalogo.filtro_datos.filter.order = ['idEstatusDisponibles ASC'];
                  }
                  else if($stateParams.catalogo == 'estatus_reserva')
                  {
                      vm.descripcion_catalogo = 'Catálogo: Estatus de la reserva';
                      vm.CatalogoMostrar = CatEstatusReserva;
                      vm.tablaCatalogo.filtro_datos.filter.order = ['estatusReserva ASC'];
                  }
                  else if($stateParams.catalogo == 'estatus_titulo')
                  {
                      vm.descripcion_catalogo = 'Catálogo: Estatus del título';
                      vm.CatalogoMostrar = CatEstatusTitulo;
                      vm.tablaCatalogo.filtro_datos.filter.order = ['idEstatusTitulo ASC'];
                  }
                  else if($stateParams.catalogo == 'modalidad_programa')
                  {
                      vm.descripcion_catalogo = 'Catálogo: Modalidad del programa de vivienda';
                      vm.CatalogoMostrar = CatModalidadPrograma;
                      vm.tablaCatalogo.filtro_datos.filter.order = ['idModalidadPrograma ASC'];
                  }
                  else if($stateParams.catalogo == 'situacion_financiera')
                  {
                      vm.descripcion_catalogo = 'Catálogo: Situación financiera del predio';
                      vm.CatalogoMostrar = CatSituacionFinanciera;
                      vm.tablaCatalogo.filtro_datos.filter.order = ['idSituacionFinanciera ASC'];
                  }
                  else if($stateParams.catalogo == 'situacion_juridica')
                  {
                      vm.descripcion_catalogo = 'Catálogo: Situación jurídica del predio';
                      vm.CatalogoMostrar = CatSituacionJuridica;
                      vm.tablaCatalogo.filtro_datos.filter.order = ['idSituacionJuridica ASC'];
                  }
                  else if($stateParams.catalogo == 'documento_asignacion')
                  {
                      vm.descripcion_catalogo = 'Catálogo: Documento de asignación del predio';
                      vm.CatalogoMostrar = CatTipoDocumentoAsignacion;
                      vm.tablaCatalogo.filtro_datos.filter.order = ['idDocumentoAsignacion ASC'];
                  }
                  

                  tablaDatosService.obtiene_datos_tabla(vm.CatalogoMostrar, vm.tablaCatalogo)
                  .then(function(respuesta) {

                        vm.tablaCatalogo.totalElementos = respuesta.total_registros;
                        vm.tablaCatalogo.inicio = respuesta.inicio;
                        vm.tablaCatalogo.fin = respuesta.fin;

                        if(vm.tablaCatalogo.totalElementos > 0)
                        {
                            vm.listaRegistros = [];
                            angular.forEach(respuesta.datos, function(reg) {
                                if($stateParams.catalogo == 'estatus_disponibles')
                                    vm.listaRegistros.push({id: reg.idEstatusDisponibles, descripcion: reg.estatusDisponibles});
                                else if($stateParams.catalogo == 'estatus_reserva')
                                    vm.listaRegistros.push({id: reg.estatusReserva, descripcion: reg.descripcionEstatusReserva});
                                else if($stateParams.catalogo == 'estatus_titulo')
                                    vm.listaRegistros.push({id: reg.idEstatusTitulo, descripcion: reg.estatusTitulo});
                                else if($stateParams.catalogo == 'modalidad_programa')
                                    vm.listaRegistros.push({id: reg.idModalidadPrograma, descripcion: reg.modalidadPrograma});
                                else if($stateParams.catalogo == 'situacion_financiera')
                                    vm.listaRegistros.push({id: reg.idSituacionFinanciera, descripcion: reg.situacionFinanciera});
                                else if($stateParams.catalogo == 'situacion_juridica')
                                    vm.listaRegistros.push({id: reg.idSituacionJuridica, descripcion: reg.situacionJuridica});
                                else if($stateParams.catalogo == 'documento_asignacion')
                                    vm.listaRegistros.push({id: reg.idDocumentoAsignacion, descripcion: reg.documentoAsignacion});
                            });
                        }
                  });

            }

            function cambiarPagina() {

                  if(vm.tablaCatalogo.totalElementos > 0)
                  {
                        tablaDatosService.cambia_pagina(vm.CatalogoMostrar, vm.tablaCatalogo)
                        .then(function(respuesta) {

                            vm.tablaCatalogo.inicio = respuesta.inicio;
                            vm.tablaCatalogo.fin = respuesta.fin;

                            vm.listaRegistros = [];
                            angular.forEach(respuesta.datos, function(reg) {
                                if($stateParams.catalogo == 'estatus_disponibles')
                                    vm.listaRegistros.push({id: reg.idEstatusDisponibles, descripcion: reg.estatusDisponibles});
                                else if($stateParams.catalogo == 'estatus_reserva')
                                    vm.listaRegistros.push({id: reg.estatusReserva, descripcion: reg.descripcionEstatusReserva});
                                else if($stateParams.catalogo == 'estatus_titulo')
                                    vm.listaRegistros.push({id: reg.idEstatusTitulo, descripcion: reg.estatusTitulo});
                                else if($stateParams.catalogo == 'modalidad_programa')
                                    vm.listaRegistros.push({id: reg.idModalidadPrograma, descripcion: reg.modalidadPrograma});
                                else if($stateParams.catalogo == 'situacion_financiera')
                                    vm.listaRegistros.push({id: reg.idSituacionFinanciera, descripcion: reg.situacionFinanciera});
                                else if($stateParams.catalogo == 'situacion_juridica')
                                    vm.listaRegistros.push({id: reg.idSituacionJuridica, descripcion: reg.situacionJuridica});
                                else if($stateParams.catalogo == 'documento_asignacion')
                                    vm.listaRegistros.push({id: reg.idDocumentoAsignacion, descripcion: reg.documentoAsignacion});
                            });

                        });
                  }
            }


            function edita_registro(registroSeleccionado) {

                    vm.RegistroSeleccionado = registroSeleccionado;

                    vm.registroEditar = {
                        id          : registroSeleccionado.id,
                        descripcion : registroSeleccionado.descripcion,
                        catalogo    : $stateParams.catalogo
                    };

                    var modalInstance = $modal.open({
                        templateUrl: 'app/components/seccion_catalogos/modal-edita-descripcion.html',
                        windowClass: "animated fadeIn",
                        controller: 'ModalEditaDescripcionController as vm',
                        resolve: {
                          registroEditar: function () { return vm.registroEditar }
                        }

                    });

                    modalInstance.result.then(function (respuesta) {
                        vm.RegistroSeleccionado.descripcion = respuesta.descripcion;
                    }, function () {
                    });
            };


            function nuevo_registro() {

                    vm.registroEditar = {
                        catalogo    : $stateParams.catalogo
                    };

                    var modalInstance = $modal.open({
                        templateUrl: 'app/components/seccion_catalogos/modal-edita-descripcion.html',
                        windowClass: "animated fadeIn",
                        controller: 'ModalNuevoRegistroController as vm',
                        resolve: {
                          registroEditar: function () { return vm.registroEditar }
                        }
                    });

                    modalInstance.result.then(function () {
                       inicia();
                    }, function () {
                    });
            };


            function elimina_registro(registroSeleccionado) {

                  swal({
                    title: "Confirmar",
                    html: 'Se eliminar&aacute; el registro <strong>'+ registroSeleccionado.descripcion +'</strong>, ¿Continuar?',
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "Aceptar",
                    cancelButtonText: "Cancelar",
                    closeOnConfirm: false,
                    closeOnCancel: true
                  }, function(){
                          swal.disableButtons();

                          vm.CatalogoMostrar.deleteById({ id: registroSeleccionado.id })
                          .$promise
                          .then(function() { 
                                inicia();
                                swal('Registro eliminado', '', 'success');
                          });
                  });

            };

    };

})();