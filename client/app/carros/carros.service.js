'use strict';
function carrosService($resource,API) {
	return $resource(API + '/api/carros/',{
		id:'@id'
	},{
		update:{
			method:'POST'
		}
	});
}

carrosService.$inject = ['$resource', 'API'];
angular.module('parqueaderoFrontendApp')
  .factory('carrosService', carrosService);