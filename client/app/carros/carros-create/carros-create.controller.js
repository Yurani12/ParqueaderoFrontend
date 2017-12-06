'use strict';
(function(){

class CarrosCreateComponent {
  constructor(carrosService) {
    this.carrosService = carrosService;
  }

  createVehiculo(){
  	this.carrosService.save(this.carros).$promise
  	.then(response => {
  		console.log('Vehiculo ingresado correctamente', response);
      this.carros = response;
  	})
  	.catch(err => {
  		console.log('error al ingresar Vehiculo', err);
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
