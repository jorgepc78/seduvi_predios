(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('ModalmuevePrediosContratadosController', ModalmuevePrediosContratadosController);

        ModalmuevePrediosContratadosController.$inject = ['$scope', '$modalInstance', 'predioEditar', 'TdPrediosInventario', 'CatTipoDocumentoAsignacion', 'CatModalidadPrograma', 'CatSituacionFinanciera'];

    function ModalmuevePrediosContratadosController($scope, $modalInstance, predioEditar, TdPrediosInventario, CatTipoDocumentoAsignacion, CatModalidadPrograma, CatSituacionFinanciera) {

            var vm = this;
            vm.predioEditar = {
                idpredio                : predioEditar.idpredio,
                beneficiario            : '',
                conyugue                : '',
                numeroExpediente        : '',
                idDocumentoAsignacion   : 0,
                idModalidadPrograma     : 0,
                numContrato             : '',
                fechaContrato           : '',
                costoPredio             : 0,
                enganche                : 0,
                subsidio                : 0,
                pagosAnticipados        : 0,
                montoMensual            : 0,
                saldoInsolutoInicial    : 0,
                idSituacionFinanciera   : 0,
                observacionesFinanciero : ''
            };

            vm.documentoAsigSelecccionado = 0;
            vm.modalidadProgSelecccionado = 0;
            vm.sitFinancieraSelecccionado = 0;

            vm.openCalendar1 = openCalendar1;
            vm.openCalendar2 = openCalendar2;
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
                });


                CatModalidadPrograma.find({
                    filter: {
                        order: 'modalidadPrograma ASC'
                    }
                })
                .$promise
                .then(function(resp) {
                    vm.listaModalidadProg = resp;
                });


                CatSituacionFinanciera.find({
                    filter: {
                        order: 'situacionFinanciera ASC'
                    }
                })
                .$promise
                .then(function(resp) {
                    vm.listaSituacionFin = resp;
                });

            }


            function openCalendar1($event) {
                $event.preventDefault();
                $event.stopPropagation();
                vm.opened1 = true;
            };

            function openCalendar2($event) {
                $event.preventDefault();
                $event.stopPropagation();
                vm.opened2 = true;
            };


            function guardar() {

                TdPrediosInventario.prototype$updateAttributes(
                {
                    id: vm.predioEditar.idpredio
                },
                {
                    beneficiario            : vm.predioEditar.beneficiario,
                    conyugue                : vm.predioEditar.conyugue,
                    numeroExpediente        : vm.predioEditar.numeroExpediente,
                    idDocumentoAsignacion   : vm.predioEditar.DocumentoAsignacion.idDocumentoAsignacion,
                    idModalidadPrograma     : vm.predioEditar.ModalidadPrograma.idModalidadPrograma,
                    numContrato             : vm.predioEditar.numContrato,
                    fechaContrato           : vm.predioEditar.fechaContrato,
                    fechaInicioPago         : vm.predioEditar.fechaInicioPago,
                    costoPredio             : vm.predioEditar.costoPredio,
                    enganche                : vm.predioEditar.enganche,
                    subsidio                : vm.predioEditar.subsidio,
                    pagosAnticipados        : vm.predioEditar.pagosAnticipados,
                    montoMensual            : vm.predioEditar.montoMensual,
                    numMensualidades        : vm.predioEditar.numMensualidades,
                    saldoInsolutoInicial    : vm.predioEditar.saldoInsolutoInicial,
                    idSituacionFinanciera   : vm.predioEditar.SituacionFinanciera.idSituacionFinanciera,
                    observacionesFinanciero : vm.predioEditar.observacionesFinanciero,
                    estatusProcesoPredio    : 2,
                    fechaActBeneficiario    : Date(),
                    fechaActFinanciera      : Date()
                })
                .$promise.then(function(respuesta) {
                      $modalInstance.close(vm.estatusSelecccionado);
                });
            };
    };

})();