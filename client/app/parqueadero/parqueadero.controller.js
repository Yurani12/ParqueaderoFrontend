'use strict';
(function(){

class ParqueaderoComponent {
  constructor() {
    this.message = 'Hello';
  }
  createVehiculo(){
  	this.parqueaderoService.save(this.parqueadero).$promise
  	.then(response => {
  		console.log('Vehiculo creado', response);
  	})
  	.catch(err => {
  		console.log('error', err);
  	})
  }
}

angular.module('parqueaderoFrontendApp')
  .component('parqueadero', {
    templateUrl: 'app/parqueadero/parqueadero.html',
    controller: ParqueaderoComponent
  });

})();
