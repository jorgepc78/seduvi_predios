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
            username: 'admin',
            password: 'admin'
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

                    Usuarios.find({ 
                        filter: {
                              where: {
                                and : [{id: response.userId},{'activo': true}]
                              },
                              fields: ['id','nombreCompleto','area','administrador','prediosDisponibles','edicionPrediosDisponibles','prediosContratados','edicionContratadosBeneficiario','edicionContratadosFinanciero','edicionContratadosJuridico','prediosTitulados','edicionPrediosTitulados','prediosNoClasificados','edicionReserva','reserva','prediosRegistro'],
                        }
                    })
                    .$promise
                    .then(function(resp) {

                        if(resp.length == 0)
                        {
                            vm.msg_error_txt = 'Usuario desactivado';

                            vm.msg_error_login = true;
                            $timeout(function(){
                                 vm.msg_error_login = false;
                                 vm.msg_error_txt = '';
                            }, 3000);
                        }
                        else
                        {
                            vm.msg_error_txt = 'Entrando al sistema...';
                            vm.msg_error_login = true;
                            $timeout(function() {

                                    var usuario = resp[0];

                                    if(usuario.administrador == true)
                                    {
                                            $rootScope.currentUser = {
                                                id_usuario                     : usuario.id,
                                                nombreCompleto                 : usuario.nombreCompleto,
                                                area                           : usuario.area,
                                                prediosDisponibles             : false,
                                                edicionPrediosDisponibles      : false,
                                                prediosContratados             : false,
                                                edicionContratadosBeneficiario : false,
                                                edicionContratadosFinanciero   : false,
                                                edicionContratadosJuridico     : false,
                                                prediosTitulados               : false,
                                                edicionPrediosTitulados        : false,
                                                prediosNoClasificados          : false,
                                                reserva                        : false,
                                                edicionReserva                 : false,
                                                prediosRegistro                : false,
                                                admin                          : true,
                                                estatus                        : 200
                                            };
                                            localStorageService.set('usuario', $rootScope.currentUser);
                                            $state.go('index.admin_usuarios');
                                    }
                                    else
                                    {
                                            $rootScope.currentUser = {
                                                id_usuario                     : usuario.id,
                                                nombreCompleto                 : usuario.nombreCompleto,
                                                area                           : usuario.area,
                                                prediosDisponibles             : usuario.prediosDisponibles,
                                                edicionPrediosDisponibles      : usuario.edicionPrediosDisponibles,
                                                prediosContratados             : usuario.prediosContratados,
                                                edicionContratadosBeneficiario : usuario.edicionContratadosBeneficiario,
                                                edicionContratadosFinanciero   : usuario.edicionContratadosFinanciero,
                                                edicionContratadosJuridico     : usuario.edicionContratadosJuridico,
                                                prediosTitulados               : usuario.prediosTitulados,
                                                edicionPrediosTitulados        : usuario.edicionPrediosTitulados,
                                                prediosNoClasificados          : usuario.prediosNoClasificados,
                                                reserva                        : usuario.reserva,
                                                edicionReserva                 : usuario.edicionReserva,
                                                prediosRegistro                : usuario.prediosRegistro,
                                                admin                          : usuario.administrador,
                                                estatus                        : 200
                                            };
                                            localStorageService.set('usuario', $rootScope.currentUser);
                                            
                                            if(usuario.prediosDisponibles == true)
                                                $state.go('index.predios_disponibles');
                                            else if(usuario.prediosContratados == true)
                                                $state.go('index.predios_contratados');
                                            else if(usuario.prediosTitulados == true)
                                                $state.go('index.predios_titulados');
                                            else if(usuario.prediosNoClasificados == true)
                                                $state.go('index.predios_no_clasificados');
                                            else if(usuario.reserva == true)
                                                $state.go('index.reservas');
                                            else if(usuario.prediosRegistro == true)
                                                $state.go('index.predios_registro');
                                            else
                                            {
                                                vm.msg_error_txt = 'El usuario no tiene acceso a ninguna sección';

                                                vm.msg_error_login = true;
                                                $timeout(function(){
                                                     vm.msg_error_login = false;
                                                     vm.msg_error_txt = '';
                                                }, 3000);
                                            }
                                    }

                            }, 1000);
                        }
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