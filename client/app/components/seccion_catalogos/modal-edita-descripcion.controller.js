(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('ModalEditaDescripcionController', ModalEditaDescripcionController);

        ModalEditaDescripcionController.$inject = ['$modalInstance', 'registroEditar', 'CatEstatusPredioDisponibles'];

    function ModalEditaDescripcionController($modalInstance, registroEditar, CatEstatusPredioDisponibles) {

            var vm = this;
            vm.registroEditar = registroEditar;
            vm.guardar = guardar;

            function guardar() {

                CatEstatusPredioDisponibles.prototype$updateAttributes(
                {
                    id: vm.registroEditar.id
                },
                {
                    estatusDisponibles : vm.registroEditar.descripcion
                })
                .$promise.then(function(respuesta) {
                      $modalInstance.close(vm.registroEditar);
                });
            };
    };

})();