(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('ModalEditaUsuarioController', ModalEditaUsuarioController);

        ModalEditaUsuarioController.$inject = ['$scope', '$modalInstance', 'usuarioEditar', 'Usuarios'];

    function ModalEditaUsuarioController($scope, $modalInstance, usuarioEditar, Usuarios) {

            var vm = this;

            vm.msg_password = false;
            vm.txt_msg_password = '';
            
            vm.usuarioEditar = {
                id                             : usuarioEditar.id,
                nombreCompleto                 : usuarioEditar.nombreCompleto,
                area                           : usuarioEditar.area,
                email                          : usuarioEditar.email,
                username                       : usuarioEditar.username,
                password                       : '',
                activo                         : usuarioEditar.activo,
                prediosNoClasificados          : usuarioEditar.prediosNoClasificados,
                prediosRegistro                : usuarioEditar.prediosRegistro,
                prediosDisponibles             : usuarioEditar.prediosDisponibles,
                edicionPrediosDisponibles      : usuarioEditar.edicionPrediosDisponibles,
                prediosContratados             : usuarioEditar.prediosContratados,
                edicionContratadosBeneficiario : usuarioEditar.edicionContratadosBeneficiario,
                edicionContratadosFinanciero   : usuarioEditar.edicionContratadosFinanciero,
                edicionContratadosJuridico     : usuarioEditar.edicionContratadosJuridico,
                prediosTitulados               : usuarioEditar.prediosTitulados,
                edicionPrediosTitulados        : usuarioEditar.edicionPrediosTitulados,
                reserva                        : usuarioEditar.reserva,
                edicionReserva                 : usuarioEditar.edicionReserva
            };

            vm.guardar = guardar;

            inicia();

            function inicia() {
    
            };

            function guardar() {

                if(vm.usuarioEditar.password == '')
                {
                    var datos = {
                            nombreCompleto                 : vm.usuarioEditar.nombreCompleto,
                            area                           : vm.usuarioEditar.area,
                            email                          : vm.usuarioEditar.email,
                            username                       : vm.usuarioEditar.username,
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
                    };
                }
                else
                {
                    var datos = {
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
                    };
                }

                Usuarios.prototype$updateAttributes(
                {
                    id: vm.usuarioEditar.id
                },
                    datos
                )
                .$promise
                .then(function(respuesta) {
                      $modalInstance.close(vm.usuarioEditar);
                })
                .catch(function(error) {
                    if(error.status == 422) {
                            vm.txt_msg_password = 'El email ya existe';
                            vm.msg_password = true;
                            $timeout(function(){
                                 vm.msg_password = false;
                                 vm.txt_msg_password = '';
                            }, 3000);
                      }
                });
            };
    };

})();