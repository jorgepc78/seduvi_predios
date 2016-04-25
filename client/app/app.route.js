(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider'];


    function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
        
        $urlRouterProvider.otherwise('login');

        $ocLazyLoadProvider.config({
            // Set to true if you want to see what and when is dynamically loaded
            debug: false
        });

        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'app/components/autorizacion/login.html',
                controller: 'loginController',
                controllerAs: 'vm'
            })
            .state('logout', {
                url: '/logout',
                controller: 'logoutController',
                controllerAs: 'vm'
            })


            .state('index', {
                abstract: true,
                url: '/index',
                templateUrl: 'app/shared/layout/content-top-navigation.html',
            })
            .state('index.predios_disponibles', {
                url: '/predios_disponibles',
                templateUrl: 'app/components/seccion_disponibles/disponibles-principal.html',
                controller: 'DisponiblesPrincipalController',
                controllerAs: 'vm',
                authenticate: true
            })
            .state('index.predios_contratados', {
                url: '/predios_contratados',
                templateUrl: 'app/components/seccion_contratados/contratados-principal.html',
                controller: 'ContratadosPrincipalController',
                controllerAs: 'vm',
                authenticate: true
            })


    }

})();