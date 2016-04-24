(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('ModalEditaCostosDisponiblesController', ModalEditaCostosDisponiblesController);

        ModalEditaCostosDisponiblesController.$inject = ['$modalInstance', 'predioEditar', 'TdPrediosInventario'];

    function ModalEditaCostosDisponiblesController($modalInstance, predioEditar, TdPrediosInventario) {

            var vm = this;
            vm.predioEditar = predioEditar;
            vm.guardar = guardar;

            function guardar() {

                TdPrediosInventario.prototype$updateAttributes(
                {
                    id: vm.predioEditar.idpredio
                },
                {
                    costoAutorizadoM2        : vm.predioEditar.costoAutorizadoM2,
                    totalCosto               : vm.predioEditar.totalCosto,
                    costoContable            : vm.predioEditar.costoContable,
                    observacionesDisponibles : vm.predioEditar.observacionesDisponibles,
                    fechaActDisponibles      : Date()
                })
                .$promise.then(function(respuesta) {
                      $modalInstance.close(respuesta);
                });
            };
    };

})();