(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('ModalEditaDatosTitulacionController', ModalEditaDatosTitulacionController);

        ModalEditaDatosTitulacionController.$inject = ['$scope', '$modalInstance', 'predioEditar', 'TdPrediosInventario', 'CatEstatusTitulo'];

    function ModalEditaDatosTitulacionController($scope, $modalInstance, predioEditar, TdPrediosInventario, CatEstatusTitulo) {

            var vm = this;
            vm.predioEditar = {
                idpredio               : predioEditar.idpredio,
                idEstatusTitulo        : predioEditar.idEstatusTitulo,
                estatusTitulo          : '',
                numeroDocumentoTitulo  : predioEditar.numeroDocumentoTitulo,
                fechaElaboracionTitulo : predioEditar.fechaElaboracionTitulo,
                observacionesTitulo    : predioEditar.observacionesTitulo,
                fechaActTitulacion     : ''
            };

            vm.SitTitulacionSelecccionado = 0;

            vm.openCalendar1 = openCalendar1;
            vm.guardar      = guardar;

            inicia();

            function inicia() {
    
                CatEstatusTitulo.find({
                    filter: {
                        order: 'estatusTitulo ASC'
                    }
                })
                .$promise
                .then(function(resp) {
                    vm.listaEstatusTitulacion = resp;

                    var listaEstatusTitulacionIndex = vm.listaEstatusTitulacion.map(function(record) {
                                                        return record.idEstatusTitulo;
                                                  }).indexOf(predioEditar.idEstatusTitulo);

                    vm.SitTitulacionSelecccionado = vm.listaEstatusTitulacion[listaEstatusTitulacionIndex];
                });

            }

            function openCalendar1($event) {
                $event.preventDefault();
                $event.stopPropagation();
                vm.opened1 = true;
            };


            function guardar() {

                vm.predioEditar.fechaActTitulacion = Date();
                vm.predioEditar.idEstatusTitulo    = vm.SitTitulacionSelecccionado.idEstatusTitulo;
                vm.predioEditar.estatusTitulo      = vm.SitTitulacionSelecccionado.estatusTitulo;

                TdPrediosInventario.prototype$updateAttributes(
                {
                    id: vm.predioEditar.idpredio
                },
                {
                    idEstatusTitulo        : vm.predioEditar.idEstatusTitulo,
                    numeroDocumentoTitulo  : vm.predioEditar.numeroDocumentoTitulo,
                    fechaElaboracionTitulo : vm.predioEditar.fechaElaboracionTitulo,
                    observacionesTitulo    : vm.predioEditar.observacionesTitulo,
                    fechaActTitulacion     : vm.predioEditar.fechaActTitulacion

                })
                .$promise.then(function(respuesta) {
                      $modalInstance.close(vm.predioEditar);
                });
            };
    };

})();