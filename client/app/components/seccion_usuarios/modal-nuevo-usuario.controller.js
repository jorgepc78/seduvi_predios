(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('ModalNuevoUsuarioController', ModalNuevoUsuarioController);

        ModalNuevoUsuarioController.$inject = ['$scope', '$timeout', '$modalInstance', 'Usuarios'];

    function ModalNuevoUsuarioController($scope, $timeout, $modalInstance, Usuarios) {

            var vm = this;
            
            vm.msg_password = false;

            vm.usuarioEditar = {
                nombreCompleto                 : '',
                area                           : '',
                email                          : '',
                username                       : '',
                password                       : '',
                activo                         : false,
                prediosNoClasificados          : false,
                prediosRegistro                : false,
                prediosDisponibles             : false,
                edicionPrediosDisponibles      : false,
                prediosContratados             : false,
                edicionContratadosBeneficiario : false,
                edicionContratadosFinanciero   : false,
                edicionContratadosJuridico     : false,
                prediosTitulados               : false,
                edicionPrediosTitulados        : false,
                reserva                        : false,
                edicionReserva                 : false
            };

            vm.guardar = guardar;

            inicia();

            function inicia() {
    
            };

            function guardar() {

                if(vm.usuarioEditar.password == '')
                {
                    vm.msg_password = true;
                    $timeout(function(){
                         vm.msg_password = false;
                    }, 3000);
                }
                else
                {
                    Usuarios
                    .create({
                        nombreCompleto                 : vm.usuarioEditar.nombreCompleto,
                        area                           : vm.usuarioEditar.area,
                        email                          : vm.usuarioEditar.email,
                        username                       : vm.usuarioEditar.username,
                        password                       : vm.usuarioEditar.password,
                        activo                         : vm.usuarioEditar.activo,
                        prediosNoClasificados          : vm.usuarioEditar.prediosNoClasificados,
                        prediosRegistro                : vm.usuarioEditar.prediosRegistro,
                        prediosDisponibles             : vm.usuarioEditar.prediosDisponibles,
                        edicionPrediosDisponibles      : vm.usuarioEditar.edicionPrediosDisponibles,
                        prediosContratados             : vm.usuarioEditar.prediosContratados,
                        edicionContratadosBeneficiario : vm.usuarioEditar.edicionContratadosBeneficiario,
                        edicionContratadosFinanciero   : vm.usuarioEditar.edicionContratadosFinanciero,
                        edicionContratadosJuridico     : vm.usuarioEditar.edicionContratadosJuridico,
                        prediosTitulados               : vm.usuarioEditar.prediosTitulados,
                        edicionPrediosTitulados        : vm.usuarioEditar.edicionPrediosTitulados,
                        reserva                        : vm.usuarioEditar.reserva,
                        edicionReserva                 : vm.usuarioEditar.edicionReserva
                    })
                    .$promise.then(function(respuesta) {
                          $modalInstance.close();
                    });

                }
            };
    };

})();