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
                password: vm.user.password,
                include: ['user']
            }
            )
            .$promise
            .then(function(response) {

                $rootScope.currentUser = {
                    idUsuarios        : response.user.idUsuarios,
                    tokenId           : response.id,
                    nombres           : response.user.nombres,
                    apellidos         : response.user.apellidos,
                    creditoDisponible : response.user.creditoDisponible,
                    estatus           : 200
                };
                localStorageService.set('usuario', $rootScope.currentUser);
                $state.go('index.predios_disponibles');

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