(function() {
    'use strict';
	
	angular
	    .module('seduvi_inv_predios')
	    .factory('apiSMSMasivosService', apiSMSMasivosService);

	apiSMSMasivosService.$inject = ['$resource', '$http'];


	function apiSMSMasivosService($resource, $http) {

		var url_base = 'https://smsmasivos.com.mx/sms/';
		var apikey = 'b8c5d3c9f2448597605e3e866c22e917a0b48d04';

		return {
			consulta_saldo: consulta_saldo
		};

	    
	    function consulta_saldo() {
	        
			return $http({
						method: 'POST',
						url: url_base + "api.credito.new.php",
						params : {
							apikey: apikey
						}
					})
					.then(ConsultaSaldoComplete)
					.catch(ConsultaSaldoFailed);

			function ConsultaSaldoComplete(response) {
				return response.data;
			}
			function ConsultaSaldoFailed(error) {
				return error;
			}
	    }
	};

})();