(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('ModalEditaDatosFinancierosController', ModalEditaDatosFinancierosController);

        ModalEditaDatosFinancierosController.$inject = ['$scope', '$modalInstance', 'predioEditar', 'TdPrediosInventario', 'CatSituacionFinanciera'];

    function ModalEditaDatosFinancierosController($scope, $modalInstance, predioEditar, TdPrediosInventario, CatSituacionFinanciera) {

            var vm = this;
            vm.predioEditar = {
                idpredio                  : predioEditar.idpredio,
                numContrato               : predioEditar.numContrato,
                fechaContrato             : predioEditar.fechaContrato,
                fechaInicioPago           : predioEditar.fechaInicioPago,
                costoPredio               : predioEditar.costoPredio,
                enganche                  : predioEditar.enganche,
                subsidio                  : predioEditar.subsidio,
                pagosAnticipados          : predioEditar.pagosAnticipados,
                saldoInsolutoInicial      : predioEditar.saldoInsolutoInicial,
                montoMensual              : predioEditar.montoMensual,
                numMensualidades          : predioEditar.numMensualidades,
                numMensualidadesAtrasadas : predioEditar.numMensualidadesAtrasadas,
                moratorios                : predioEditar.moratorios,
                idSituacionFinanciera     : predioEditar.idSituacionFinanciera,
                situacionFinanciera       : '',
                observacionesFinanciero   : predioEditar.observacionesFinanciero,
                fechaActFinanciera        : ''
            };

            vm.SitFinancieraSelecccionado = 0;

            vm.openCalendar1 = openCalendar1;
            vm.openCalendar2 = openCalendar2;
            vm.guardar       = guardar;

            inicia();

            function inicia() {
    
                CatSituacionFinanciera.find({
                    filter: {
                        order: 'situacionFinanciera ASC'
                    }
                })
                .$promise
                .then(function(resp) {
                    vm.listaSituacionFin = resp;

                    var listaSituacionFinIndex = vm.listaSituacionFin.map(function(record) {
                                                        return record.idSituacionFinanciera;
                                                  }).indexOf(predioEditar.idSituacionFinanciera);

                    vm.SitFinancieraSelecccionado = vm.listaSituacionFin[listaSituacionFinIndex];
                });

            };

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

                vm.predioEditar.fechaActFinanciera  = Date();
                vm.predioEditar.idSituacionFinanciera = vm.SitFinancieraSelecccionado.idSituacionFinanciera;
                vm.predioEditar.situacionFinanciera   = vm.SitFinancieraSelecccionado.situacionFinanciera;

                TdPrediosInventario.prototype$updateAttributes(
                {
                    id: vm.predioEditar.idpredio
                },
                {
                    numContrato               : vm.predioEditar.numContrato,
                    fechaContrato             : vm.predioEditar.fechaContrato,
                    fechaInicioPago           : vm.predioEditar.fechaInicioPago,
                    costoPredio               : vm.predioEditar.costoPredio,
                    enganche                  : vm.predioEditar.enganche,
                    subsidio                  : vm.predioEditar.subsidio,
                    pagosAnticipados          : vm.predioEditar.pagosAnticipados,
                    saldoInsolutoInicial      : vm.predioEditar.saldoInsolutoInicial,
                    montoMensual              : vm.predioEditar.montoMensual,
                    numMensualidades          : vm.predioEditar.numMensualidades,
                    numMensualidadesAtrasadas : vm.predioEditar.numMensualidadesAtrasadas,
                    moratorios                : vm.predioEditar.moratorios,
                    idSituacionFinanciera     : vm.predioEditar.idSituacionFinanciera,
                    observacionesFinanciero   : vm.predioEditar.observacionesFinanciero,
                    fechaActFinanciera        : vm.predioEditar.fechaActFinanciera
                })
                .$promise.then(function(respuesta) {
                      $modalInstance.close(vm.predioEditar);
                });
            };
    };

})();