'use strict';
(function(){

class CarrosCreateComponent {
  constructor(carrosService) {
    this.carrosService = carrosService;
    console.log('si');
  }

  createVehiculo(){
  	console.log('si 1');
  	this.carrosService.save(this.carros).$promise
  	.then(response => {
  		console.log('Vehiculo creado', response);
  	})
  	.catch(err => {
  		console.log('error', err);
  	})
  }
}
CarrosCreateComponent.$inject = ['carrosService'];
angular.module('parqueaderoFrontendApp')
  .component('carrosCreate', {
    templateUrl: 'app/carros/carros-create/carros-create.html',
    controller: CarrosCreateComponent,
    controllerAs: 'vm'
  });

})();
