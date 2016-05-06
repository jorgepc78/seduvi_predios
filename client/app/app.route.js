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
            .state('index.predios_titulados', {
                url: '/predios_titulados',
                templateUrl: 'app/components/seccion_titulados/titulados-principal.html',
                controller: 'TituladosPrincipalController',
                controllerAs: 'vm',
                authenticate: true
            })
            .state('index.predios_no_clasificados', {
                url: '/predios_no_clasificados',
                templateUrl: 'app/components/seccion_no_clasificados/no-clasificados-principal.html',
                controller: 'NoClasificadosPrincipalController',
                controllerAs: 'vm',
                authenticate: true
            })
            .state('index.predios_registro', {
                url: '/predios_registro',
                templateUrl: 'app/components/seccion_registro_predios/registro-predios-principal.html',
                controller: 'RegistroPrediosPrincipalController',
                controllerAs: 'vm',
                authenticate: true
            })
            .state('index.reservas', {
                url: '/reservas',
                templateUrl: 'app/components/seccion_reservas/reservas-principal.html',
                controller: 'ReservasPrincipalController',
                controllerAs: 'vm',
                authenticate: true
            })

            .state('index.admin_usuarios', {
                url: '/admin_usuarios',
                templateUrl: 'app/components/seccion_usuarios/admin-usuarios-principal.html',
                controller: 'AdminUsuariosPrincipalController',
                controllerAs: 'vm',
                authenticate: true
            })
            .state('index.cat_estatus_disponibles', {
                url: '/cat_estatus_disponibles',
                templateUrl: 'app/components/seccion_catalogos/contenido-catalogo.html',
                controller: 'EstatusPrediosDisponiblesController',
                controllerAs: 'vm',
                authenticate: true
            })


    }

})();