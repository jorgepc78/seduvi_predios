(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('ModalEditaDatosReservaController', ModalEditaDatosReservaController);

        ModalEditaDatosReservaController.$inject = ['$scope', '$modalInstance', 'reservaEditar', 'Reserva', 'CatEstatusReserva'];

    function ModalEditaDatosReservaController($scope, $modalInstance, reservaEditar, Reserva, CatEstatusReserva) {

            var vm = this;
            vm.reservaEditar = {
                idreserva                 : reservaEditar.idreserva,
                estatusReserva            : reservaEditar.estatusReserva,
                descripcionEstatusReserva : '',
                nombre                    : reservaEditar.nombre,
                superficieRegistrada      : reservaEditar.superficieRegistrada,
                observacionesReserva      : reservaEditar.observacionesReserva
            };

            vm.estatusSeleccionado = 0;

            vm.guardar      = guardar;

            inicia();

            function inicia() {
    
                CatEstatusReserva.find({
                    filter: {
                        order: 'descripcionEstatusReserva ASC'
                    }
                })
                .$promise
                .then(function(resp) {
                    vm.listaEstatusReserva = resp;

                    var listaEstatusReservaIndex = vm.listaEstatusReserva.map(function(record) {
                                                        return record.estatusReserva;
                                                  }).indexOf(reservaEditar.estatusReserva);

                    vm.estatusSeleccionado = vm.listaEstatusReserva[listaEstatusReservaIndex];
                });

            }


            function guardar() {

                vm.reservaEditar.estatusReserva            = vm.estatusSeleccionado.estatusReserva;
                vm.reservaEditar.descripcionEstatusReserva = vm.estatusSeleccionado.descripcionEstatusReserva;

                Reserva.prototype$updateAttributes(
                {
                    id: vm.reservaEditar.idreserva
                },
                {
                    estatusReserva            : vm.reservaEditar.estatusReserva,
                    nombre                    : vm.reservaEditar.nombre,
                    superficieRegistrada      : vm.reservaEditar.superficieRegistrada,
                    observacionesReserva      : vm.reservaEditar.observacionesReserva
                })
                .$promise.then(function(respuesta) {
                      $modalInstance.close(vm.reservaEditar);
                });
            };
    };

})();