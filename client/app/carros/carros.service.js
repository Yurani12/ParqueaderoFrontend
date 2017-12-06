'use strict';
function carrosService($resource,API) {
	return $resource(API + '/api/carros/:id',{
		id:'@id'
	},{
		update:{
			method:'PUT'
		}
	});
}

carrosService.$inject = ['$resource', 'API'];
angular.module('parqueaderoFrontendApp')
  .factory('carrosService', carrosService);