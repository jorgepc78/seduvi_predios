(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('ModalEditaDatosRegistroPredioController', ModalEditaDatosRegistroPredioController);

        ModalEditaDatosRegistroPredioController.$inject = ['$scope', '$modalInstance', 'predioEditar', 'SdePredios', 'CatTipoLote'];

    function ModalEditaDatosRegistroPredioController($scope, $modalInstance, predioEditar, SdePredios, CatTipoLote) {

            var vm = this;
            vm.predioEditar = {
                idp                 : predioEditar.idp,
                direccion           : predioEditar.direccion,
                claveCatastral      : predioEditar.claveCatastral,
                folioElectronicoRpp : predioEditar.folioElectronicoRpp,
                fechaRegistroRpp    : predioEditar.fechaRegistroRpp,
                lugarRegistroRpp    : predioEditar.lugarRegistroRpp,
                superficie          : predioEditar.superficie,
                medidasNorte        : predioEditar.medidasNorte,
                colindanteNorte     : predioEditar.colindanteNorte,
                medidasSur          : predioEditar.medidasSur,
                colindanteSur       : predioEditar.colindanteSur,
                medidasEste         : predioEditar.medidasEste,
                colindanteEste      : predioEditar.colindanteEste,
                medidasOeste        : predioEditar.medidasOeste,
                colindanteOeste     : predioEditar.colindanteOeste,
                idTipoLote          : predioEditar.idTipoLote,
                tipoLote            : ''
            };

            vm.TipoLoteSeleccionado = 0;

            vm.openCalendar1 = openCalendar1;
            vm.guardar       = guardar;

            inicia();

            function inicia() {
    
                CatTipoLote.find({
                    filter: {
                        order: 'tipoLote ASC'
                    }
                })
                .$promise
                .then(function(resp) {
                    vm.listaTiposLote = resp;

                    var listaTiposLoteIndex = vm.listaTiposLote.map(function(record) {
                                                        return record.idTipoLote;
                                                  }).indexOf(predioEditar.idTipoLote);

                    vm.TipoLoteSeleccionado = vm.listaTiposLote[listaTiposLoteIndex];
                });

            };

            function openCalendar1($event) {
                $event.preventDefault();
                $event.stopPropagation();
                vm.opened1 = true;
            };


            function guardar() {

                vm.predioEditar.idTipoLote = vm.TipoLoteSeleccionado.idTipoLote;
                vm.predioEditar.tipoLote   = vm.TipoLoteSeleccionado.tipoLote;

                if(vm.predioEditar.fechaRegistroRpp == '')
                    vm.predioEditar.fechaRegistroRpp = null;

                SdePredios.find({
                  filter: {
                        where: {idp: vm.predioEditar.idp},
                        fields: ['objectid']
                  }
                })
                .$promise
                .then(function(resp) {
        
                        SdePredios.prototype$updateAttributes(
                        {
                            id: resp[0].objectid
                        },
                        {
                            direccion           : vm.predioEditar.direccion,
                            claveCatastral      : vm.predioEditar.claveCatastral,
                            folioElectronicoRpp : vm.predioEditar.folioElectronicoRpp,
                            fechaRegistroRpp    : vm.predioEditar.fechaRegistroRpp,
                            lugarRegistroRpp    : vm.predioEditar.lugarRegistroRpp,
                            superficie          : vm.predioEditar.superficie,
                            medidasNorte        : vm.predioEditar.medidasNorte,
                            colindanteNorte     : vm.predioEditar.colindanteNorte,
                            medidasSur          : vm.predioEditar.medidasSur,
                            colindanteSur       : vm.predioEditar.colindanteSur,
                            medidasEste         : vm.predioEditar.medidasEste,
                            colindanteEste      : vm.predioEditar.colindanteEste,
                            medidasOeste        : vm.predioEditar.medidasOeste,
                            colindanteOeste     : vm.predioEditar.colindanteOeste,
                            idTipoLote          : vm.predioEditar.idTipoLote
                        })
                        .$promise.then(function(respuesta) {
                              $modalInstance.close(vm.predioEditar);
                        });

                });
            };
    };

})();