(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('ModalEditaDatosJuridicosController', ModalEditaDatosJuridicosController);

        ModalEditaDatosJuridicosController.$inject = ['$scope', '$modalInstance', 'predioEditar', 'TdPrediosInventario', 'CatSituacionJuridica'];

    function ModalEditaDatosJuridicosController($scope, $modalInstance, predioEditar, TdPrediosInventario, CatSituacionJuridica) {

            var vm = this;
            vm.predioEditar = {
                idpredio              : predioEditar.idpredio,
                idSituacionJuridica   : predioEditar.idSituacionJuridica,
                situacionJuridica     : '',
                observacionesJuridico : predioEditar.observacionesJuridico,
                fechaActJuridica      : ''
            };

            vm.SitJuridicaSelecccionado = 0;

            vm.guardar      = guardar;

            inicia();

            function inicia() {
    
                CatSituacionJuridica.find({
                    filter: {
                        order: 'situacionJuridica ASC'
                    }
                })
                .$promise
                .then(function(resp) {
                    vm.listaSituacionJur = resp;

                    var listaSituacionJurIndex = vm.listaSituacionJur.map(function(record) {
                                                        return record.idSituacionJuridica;
                                                  }).indexOf(predioEditar.idSituacionJuridica);

                    vm.SitJuridicaSelecccionado = vm.listaSituacionJur[listaSituacionJurIndex];
                });

            }


            function guardar() {

                vm.predioEditar.fechaActJuridica    = Date();
                vm.predioEditar.idSituacionJuridica = vm.SitJuridicaSelecccionado.idSituacionJuridica;
                vm.predioEditar.situacionJuridica   = vm.SitJuridicaSelecccionado.situacionJuridica;

                TdPrediosInventario.prototype$updateAttributes(
                {
                    id: vm.predioEditar.idpredio
                },
                {
                    idSituacionJuridica   : vm.predioEditar.idSituacionJuridica,
                    observacionesJuridico : vm.predioEditar.observacionesJuridico,
                    fechaActJuridica      : vm.predioEditar.fechaActJuridica
                })
                .$promise.then(function(respuesta) {
                      $modalInstance.close(vm.predioEditar);
                });
            };
    };

})();