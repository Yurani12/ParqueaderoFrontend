'use strict';
function parqueaderoService($resource,API) {
	return $resource(API + '/api/parqueaderos/:id',{
		id:'@id'
	},{
		update:{
			method:'PUT'
		}
	});
}

parqueaderoService.$inject = ['$resource', 'API'];
angular.module('parqueaderoFrontendApp')
  .factory('parqueaderoService', parqueaderoService);