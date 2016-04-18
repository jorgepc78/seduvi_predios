(function () {
    'use strict';

    angular.module('seduvi_inv_predios', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
    	'lbServices',
    	'LocalStorageModule',
    	'ui.event',
    	'oitozero.ngSweetAlert',
        'ui.map'
    	/*'templates'*/
    ]);
})();
