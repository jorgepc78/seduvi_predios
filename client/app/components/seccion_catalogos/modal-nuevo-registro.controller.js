(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('ModalNuevoRegistroController', ModalNuevoRegistroController);

        ModalNuevoRegistroController.$inject = ['$modalInstance', 'registroEditar', 'CatEstatusPredioDisponibles'];

    function ModalNuevoRegistroController($modalInstance, registroEditar, CatEstatusPredioDisponibles) {

            var vm = this;
            vm.registroEditar = registroEditar;
            vm.guardar = guardar;

            function guardar() {

                CatEstatusPredioDisponibles
                .create({
                    estatusDisponibles : vm.registroEditar.descripcion
                })
                .$promise.then(function(respuesta) {
                      $modalInstance.close();
                });
            };
    };

})();