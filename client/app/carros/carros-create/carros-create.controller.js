'use strict';
(function(){

class CarrosCreateComponent {
  constructor(carrosService, puestoService) {
    this.carrosService = carrosService;
    this.puestoService = puestoService;
  }

  $onInit(){
    this.puestoService.query().$promise
    .then(response => {
      console.log('Puestos', response);
      this.tipoPuesto = response;
    })
    .catch(err => {
      console.log('Error', err);
    })
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
