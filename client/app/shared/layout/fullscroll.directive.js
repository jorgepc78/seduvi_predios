(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .directive('fullScroll', fullScroll)

    function fullScroll($timeout){
        return {
            restrict: 'A',
            link: function(scope, element) {
                $timeout(function(){
                    element.slimscroll({
                        height: '100%',
                        railOpacity: 0.9
                    });

                });
            }
        };
    }

})();