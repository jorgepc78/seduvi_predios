(function() {
    'use strict';

    angular
        .module('seduvi_inv_predios')
        .directive('ngTeclaenter', ngTeclaenter);

    function ngTeclaenter(){
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.ngTeclaenter);
                    });

                    event.preventDefault();
                }
            });
        };
    }

})();