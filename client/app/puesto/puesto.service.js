'use strict';
function puestoService($resource,API) {
	return $resource(API + '/api/puesto/:id',{
		id:'@id'
	},{
		update:{
			method:'PUT'
		}
	});
}

puestoService.$inject = ['$resource', 'API'];
angular.module('parqueaderoFrontendApp')
  .factory('puestoService', puestoService);