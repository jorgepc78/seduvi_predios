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


            .state('index.sms_segmentados', {
                url: '/sms_segmentados',
                templateUrl: 'app/components/sms-segmentados/lista-sms-segmentados.html',
                controller: 'listaSMSSegmentadosController',
                controllerAs: 'vm',
                authenticate: true,
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                name: 'ui.event',
                                files: ['assets/libs/uievents/event.js']
                            },
                            {
                                files: ['assets/libs/sweetalert2/dist/sweetalert2.min.js', 'assets/libs/sweetalert2/dist/sweetalert2.css']
                            },
                            {
                                name: 'oitozero.ngSweetAlert',
                                files: ['assets/libs/angular-sweetalert/SweetAlert.min.js']
                            }
                        ]);
                    }
                }
            })
            .state('index.programa_sms_segmentado', {
                url: '/programa_sms_segmentado',
                templateUrl: 'app/components/sms-segmentados/programa-sms-segmentado.html',
                controller: 'programaSMSSegmentadoController',
                controllerAs: 'vm',
                authenticate: true,
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                name: 'ui.date',
                                files: ['assets/libs/jquery-ui/themes/base/jquery-ui.css','assets/libs/jquery-ui/ui/minified/i18n/datepicker-es.min.js','assets/libs/angular-ui-date/src/date.js']
                            },
                            {
                                files: ['assets/libs/sweetalert2/dist/sweetalert2.min.js', 'assets/libs/sweetalert2/dist/sweetalert2.css']
                            },
                            {
                                name: 'oitozero.ngSweetAlert',
                                files: ['assets/libs/angular-sweetalert/SweetAlert.min.js']
                            },
                            {
                                name: 'cgNotify',
                                files: ['assets/libs/angular-notify/dist/angular-notify.min.css','assets/libs/angular-notify/dist/angular-notify.min.js']
                            },
                            {
                                files: ['assets/libs/iCheck/skins/all.css','assets/libs/iCheck/icheck.min.js']
                            }
                        ]);
                    }
                }
            })



            .state('reportes', {
                abstract: true,
                url: '/reportes',
                templateUrl: 'app/shared/layout/content-top-navigation.html',
            })
            .state('reportes.resumen_msj_enviados', {
                url: '/resumen_msj_enviados',
                templateUrl: 'app/components/reportes/resumen-msj-enviados.html',
                controller: 'resumenMsjEnviadosController',
                controllerAs: 'vm',
                authenticate: true,
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                name: 'ui.event',
                                files: ['assets/libs/uievents/event.js']
                            },
                            {
                                files: ['assets/libs/sweetalert2/dist/sweetalert2.min.js', 'assets/libs/sweetalert2/dist/sweetalert2.css']
                            },
                            {
                                name: 'oitozero.ngSweetAlert',
                                files: ['assets/libs/angular-sweetalert/SweetAlert.min.js']
                            }
                        ]);
                    }
                }
            });
    }

})();