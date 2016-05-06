(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('EstatusPrediosDisponiblesController', EstatusPrediosDisponiblesController);

    EstatusPrediosDisponiblesController.$inject = ['$modal', 'tablaDatosService', 'CatEstatusPredioDisponibles'];

    function EstatusPrediosDisponiblesController($modal, tablaDatosService, CatEstatusPredioDisponibles ) {

            var vm = this;
            vm.descripcion_catalogo = 'Catálogo: Estatus de predios disponibles';
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


                  tablaDatosService.obtiene_datos_tabla(CatEstatusPredioDisponibles, vm.tablaCatalogo)
                  .then(function(respuesta) {

                        vm.tablaCatalogo.totalElementos = respuesta.total_registros;
                        vm.tablaCatalogo.inicio = respuesta.inicio;
                        vm.tablaCatalogo.fin = respuesta.fin;

                        if(vm.tablaCatalogo.totalElementos > 0)
                        {
                            vm.listaRegistros = [];
                            angular.forEach(respuesta.datos, function(reg) {
                                vm.listaRegistros.push({id: reg.idEstatusDisponibles, descripcion: reg.estatusDisponibles});
                            });
                        }
                  });

            }

            function cambiarPagina() {

                  if(vm.tablaCatalogo.totalElementos > 0)
                  {
                        tablaDatosService.cambia_pagina(CatEstatusPredioDisponibles, vm.tablaCatalogo)
                        .then(function(respuesta) {

                            vm.tablaCatalogo.inicio = respuesta.inicio;
                            vm.tablaCatalogo.fin = respuesta.fin;

                            vm.listaRegistros = [];
                            angular.forEach(respuesta.datos, function(reg) {
                                vm.listaRegistros.push({id: reg.idEstatusDisponibles, descripcion: reg.estatusDisponibles});
                            });

                        });
                  }
            }


            function edita_registro(registroSeleccionado) {

                    vm.RegistroSeleccionado = registroSeleccionado;

                    vm.registroEditar = {
                        id          : registroSeleccionado.id,
                        descripcion : registroSeleccionado.descripcion,
                        catalogo    : 'estatus_predios_disponibles'
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
                        catalogo    : 'estatus_predios_disponibles'
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

                          CatEstatusPredioDisponibles.deleteById({ id: registroSeleccionado.id })
                          .$promise
                          .then(function() { 
                                inicia();
                                swal('Registro eliminado', '', 'success');
                          });
                  });

            };

    };

})();