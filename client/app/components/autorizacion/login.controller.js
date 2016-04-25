(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('loginController', loginController)

    loginController.$inject = ['$rootScope','$timeout', '$state', 'localStorageService', 'Usuarios'];

    function loginController($rootScope, $timeout, $state, localStorageService, Usuarios) {

        var vm = this;

        vm.login = login;

        vm.user = {
            username: 'jorgepc',
            password: 'txfiles'
        };

        vm.msg_error_login = false;
        vm.msg_error_txt = '';


        function login() {

            vm.msg_error_login = false;

            Usuarios
            .login({
                username: vm.user.username,
                password: vm.user.password
            })
            .$promise
            .then(function(response) {

                    Usuarios.findById({ 
                        id: response.userId,
                        filter: {
                              fields: ['id','idPerfil','nombreCompleto','area'],
                              include: [
                                {
                                    relation: 'perfil_usuario',
                                    scope: {
                                        fields:['edicionContratadosBeneficiario','edicionContratadosFinanciero','edicionContratadosJuridico','edicionPrediosDisponibles','edicionPrediosTitulados','edicionReserva','prediosContratados','prediosDisponibles','prediosNoClasificados','prediosTitulados','reserva','prediosRegistro']
                                    }
                                }
                              ]
                        }
                    })
                    .$promise
                    .then(function(usuario) {
                            $rootScope.currentUser = {
                                id_usuario                     : usuario.id,
                                nombreCompleto                 : usuario.nombreCompleto,
                                area                           : usuario.area,
                                prediosDisponibles             : usuario.perfil_usuario.prediosDisponibles,
                                edicionPrediosDisponibles      : usuario.perfil_usuario.edicionPrediosDisponibles,
                                prediosContratados             : usuario.perfil_usuario.prediosContratados,
                                edicionContratadosBeneficiario : usuario.perfil_usuario.edicionContratadosBeneficiario,
                                edicionContratadosFinanciero   : usuario.perfil_usuario.edicionContratadosFinanciero,
                                edicionContratadosJuridico     : usuario.perfil_usuario.edicionContratadosJuridico,
                                prediosTitulados               : usuario.perfil_usuario.prediosTitulados,
                                edicionPrediosTitulados        : usuario.perfil_usuario.edicionPrediosTitulados,
                                prediosNoClasificados          : usuario.perfil_usuario.prediosNoClasificados,
                                reserva                        : usuario.perfil_usuario.reserva,
                                edicionReserva                 : usuario.perfil_usuario.edicionReserva,
                                prediosRegistro                : usuario.perfil_usuario.prediosRegistro,
                                admin                          : (usuario.perfil_usuario.idPerfil == 0 ? true : false),
                                estatus                        : 200
                            };
                            localStorageService.set('usuario', $rootScope.currentUser);
                            
                            if(usuario.perfil_usuario.idPerfil == 0)
                                $state.go('index.admin_usuarios');
                            else if(usuario.perfil_usuario.prediosDisponibles == true)
                                $state.go('index.predios_disponibles');
                            else if(usuario.perfil_usuario.prediosContratados == true)
                                $state.go('index.predios_contratados');
                            else if(usuario.perfil_usuario.prediosTitulados == true)
                                $state.go('index.predios_titulados');
                            else if(usuario.perfil_usuario.prediosNoClasificados == true)
                                $state.go('index.predios_noclasificados');
                            else if(usuario.perfil_usuario.reserva == true)
                                $state.go('index.reserva');
                            else if(usuario.perfil_usuario.prediosRegistro == true)
                                $state.go('index.predios_registro');

                    });
            })
            .catch(function(error) {
                if(error.status == 401) {

                    $rootScope.currentUser = {
                        estatus: error.status
                    };

                    if(error.data.error.message == 'login failed as the email has not been verified')
                        vm.msg_error_txt = 'El email no ha sido verificado';
                    else
                        vm.msg_error_txt = 'El nombre de usuario no existe o contraseña incorrecta';

                    vm.msg_error_login = true;
                    $timeout(function(){
                         vm.msg_error_login = false;
                         vm.msg_error_txt = '';
                    }, 3000);

                  }
            });
        }

    };

})();