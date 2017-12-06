'use strict';
(function(){

class LogicaComponent {
  constructor() {
  	this.sancocho = ["Hola", "Mundo"];
  	console.log(this.sancocho.concat["a todos"]);
  }
 	//input(){
 	//	console.log(this.placa);
 	//}
}

angular.module('parqueaderoFrontendApp')
  .component('logica', {
    templateUrl: 'app/logica/logica.html',
    controller: LogicaComponent,
    controllerAs:'vm'
  });

})();
