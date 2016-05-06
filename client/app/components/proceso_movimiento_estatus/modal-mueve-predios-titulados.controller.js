(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('ModalMuevePrediosTituladosController', ModalMuevePrediosTituladosController);

        ModalMuevePrediosTituladosController.$inject = ['$scope', '$modalInstance', 'predioEditar', 'TdPrediosInventario', 'CatEstatusTitulo'];

    function ModalMuevePrediosTituladosController($scope, $modalInstance, predioEditar, TdPrediosInventario, CatEstatusTitulo) {

            var vm = this;
            vm.predioEditar = {
                idpredio               : predioEditar.idpredio,
                idEstatusTitulo        : 0,
                numeroDocumentoTitulo  : '',
                fechaElaboracionTitulo : '',
                observacionesTitulo    : ''
            };

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
                    vm.listaestatusTitulo = resp;
                });

            }


            function openCalendar1($event) {
                $event.preventDefault();
                $event.stopPropagation();
                vm.opened1 = true;
            };

            function guardar() {

                if(vm.predioEditar.fechaElaboracionTitulo == '')
                    vm.predioEditar.fechaElaboracionTitulo = null;
                
                TdPrediosInventario.prototype$updateAttributes(
                {
                    id: vm.predioEditar.idpredio
                },
                {
                    idEstatusTitulo        : vm.predioEditar.EstatusTitulo.idEstatusTitulo,
                    numeroDocumentoTitulo  : vm.predioEditar.numeroDocumentoTitulo,
                    fechaElaboracionTitulo : vm.predioEditar.fechaElaboracionTitulo,
                    observacionesTitulo    : vm.predioEditar.observacionesTitulo,
                    estatusProcesoPredio   : 3,
                    fechaActTitulacion     : Date()
                })
                .$promise.then(function(respuesta) {
                      $modalInstance.close();
                });
            };
    };

})();