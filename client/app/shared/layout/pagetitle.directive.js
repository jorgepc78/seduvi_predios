(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .directive('pageTitle', pageTitle)

    function pageTitle($rootScope, $timeout) {
        return {
            link: function(scope, element) {
                var listener = function(event, toState, toParams, fromState, fromParams) {
                    // Default title - load on Dashboard 1
                    var title = 'SEDUVI';
                    // Create your own title pattern
                    if (toState.data && toState.data.pageTitle) title = 'PasconGroup | ' + toState.data.pageTitle;
                    $timeout(function() {
                        element.text(title);
                    });
                };
                $rootScope.$on('$stateChangeStart', listener);
            }
        }
    }

})();