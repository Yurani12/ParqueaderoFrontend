'use strict';
(function(){

class LogicaComponent {
  constructor() {
  	
   this.carros = [{plata:'ABC123',horaLLegada:7},{plata:'HGS354',horaLLegada:8}];
   
  }
 	$onInit(){
 		console.log(this.usuarios);
 	}
}

angular.module('parqueaderoFrontendApp')
  .component('logica', {
    templateUrl: 'app/logica/logica.html',
    controller: LogicaComponent,
    controllerAs:'vm'
  });

})();
