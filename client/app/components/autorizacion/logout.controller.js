(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .controller('logoutController' , logoutController)

    logoutController.$inject = ['$rootScope', 'localStorageService', 'Usuarios', '$state'];

    function logoutController($rootScope, localStorageService, Usuarios, $state) {

        Usuarios
        .logout()
        .$promise
        .then(function() {
           $rootScope.currentUser = null;
           localStorageService.remove('usuario');
           $state.go('login');
        });

    };

})();