(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('ModalEditaDatosBeneficiarioController', ModalEditaDatosBeneficiarioController);

        ModalEditaDatosBeneficiarioController.$inject = ['$scope', '$modalInstance', 'predioEditar', 'TdPrediosInventario', 'CatTipoDocumentoAsignacion', 'CatModalidadPrograma'];

    function ModalEditaDatosBeneficiarioController($scope, $modalInstance, predioEditar, TdPrediosInventario, CatTipoDocumentoAsignacion, CatModalidadPrograma) {

            var vm = this;
            vm.predioEditar = {
                idpredio                : predioEditar.idpredio,
                beneficiario            : predioEditar.beneficiario,
                conyugue                : predioEditar.conyugue,
                numeroExpediente        : predioEditar.numeroExpediente,
                idModalidadPrograma     : predioEditar.idModalidadPrograma,
                modalidadPrograma       : '',
                idDocumentoAsignacion   : predioEditar.idDocumentoAsignacion,
                documentoAsignacion     : '',
                observacionesSocial     : predioEditar.observacionesSocial,
                fechaActBeneficiario    : ''
            };

            vm.documentoAsigSelecccionado = 0;
            vm.modalidadProgSelecccionado = 0;

            vm.guardar      = guardar;

            inicia();

            function inicia() {
    
                CatTipoDocumentoAsignacion.find({
                    filter: {
                        order: 'documentoAsignacion ASC'
                    }
                })
                .$promise
                .then(function(resp) {
                    vm.listaDocumentosAsig = resp;

                    var listaDocumentosAsigIndex = vm.listaDocumentosAsig.map(function(record) {
                                                        return record.idDocumentoAsignacion;
                                                  }).indexOf(predioEditar.idDocumentoAsignacion);

                    vm.documentoAsigSelecccionado = vm.listaDocumentosAsig[listaDocumentosAsigIndex];
                });


                CatModalidadPrograma.find({
                    filter: {
                        order: 'modalidadPrograma ASC'
                    }
                })
                .$promise
                .then(function(resp) {
                    vm.listaModalidadProg = resp;

                    var listaModalidadProgIndex = vm.listaModalidadProg.map(function(record) {
                                                        return record.idModalidadPrograma;
                                                  }).indexOf(predioEditar.idModalidadPrograma);

                    vm.modalidadProgSelecccionado = vm.listaModalidadProg[listaModalidadProgIndex];
                });

            }


            function guardar() {

                vm.predioEditar.fechaActBeneficiario  = Date();
                vm.predioEditar.idDocumentoAsignacion = vm.documentoAsigSelecccionado.idDocumentoAsignacion;
                vm.predioEditar.documentoAsignacion   = vm.documentoAsigSelecccionado.documentoAsignacion;
                vm.predioEditar.idModalidadPrograma   = vm.modalidadProgSelecccionado.idModalidadPrograma;
                vm.predioEditar.modalidadPrograma     = vm.modalidadProgSelecccionado.modalidadPrograma;

                TdPrediosInventario.prototype$updateAttributes(
                {
                    id: vm.predioEditar.idpredio
                },
                {
                    beneficiario            : vm.predioEditar.beneficiario,
                    conyugue                : vm.predioEditar.conyugue,
                    numeroExpediente        : vm.predioEditar.numeroExpediente,
                    idDocumentoAsignacion   : vm.predioEditar.idDocumentoAsignacion,
                    idModalidadPrograma     : vm.predioEditar.idModalidadPrograma,
                    observacionesSocial     : vm.predioEditar.observacionesSocial,
                    fechaActBeneficiario    : vm.predioEditar.fechaActBeneficiario
                })
                .$promise.then(function(respuesta) {
                      $modalInstance.close(vm.predioEditar);
                });
            };
    };

})();