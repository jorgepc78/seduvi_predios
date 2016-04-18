(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .run(runBlock);

    runBlock.$inject = ['$rootScope', '$state', 'localStorageService'];
    
    
    function runBlock($rootScope, $state, localStorageService) {

                $rootScope.$on('$stateChangeStart', function(event, next) {

                if (localStorageService.get('usuario') !== undefined && localStorageService.get('usuario') !== null)
                        $rootScope.currentUser = localStorageService.get('usuario');

                  // redirect to login page if not logged in
                  if (next.authenticate && !$rootScope.currentUser) {
                    event.preventDefault(); //prevent current page from loading
                    $state.go('login');
                  }
                });

                $rootScope.$state = $state;
    }

})();