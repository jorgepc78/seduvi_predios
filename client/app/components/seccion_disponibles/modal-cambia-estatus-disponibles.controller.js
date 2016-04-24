(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('ModalCambiaEstatusDisponiblesController', ModalCambiaEstatusDisponiblesController);

        ModalCambiaEstatusDisponiblesController.$inject = ['$modalInstance', 'predioEditar', 'TdPrediosInventario', 'CatEstatusPredioDisponibles'];

    function ModalCambiaEstatusDisponiblesController($modalInstance, predioEditar, TdPrediosInventario, CatEstatusPredioDisponibles) {

            var vm = this;
            vm.predioEditar = predioEditar;
            vm.estatusSelecccionado = 0;
            vm.guardar = guardar;

            inicia();

            function inicia() {
    
                CatEstatusPredioDisponibles.find({
                    filter: {
                        order: 'estatusDisponibles ASC'
                    }
                })
                .$promise
                .then(function(resp) {
                    vm.listaEstatus = resp;

                    var estatusSelecccionadoIndex = vm.listaEstatus.map(function(estatus) {
                                                        return estatus.idEstatusDisponibles;
                                                      }).indexOf(vm.predioEditar.idEstatusDisponibles);

                    vm.estatusSelecccionado = vm.listaEstatus[estatusSelecccionadoIndex];
                });

            }

            function guardar() {

                TdPrediosInventario.prototype$updateAttributes(
                {
                    id: vm.predioEditar.idpredio
                },
                {
                    idEstatusDisponibles     : vm.estatusSelecccionado.idEstatusDisponibles,
                    fechaActDisponibles      : Date()
                })
                .$promise.then(function(respuesta) {
                      $modalInstance.close(vm.estatusSelecccionado);
                });
            };
    };

})();