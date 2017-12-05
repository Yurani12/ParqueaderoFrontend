'use strict';

angular.module('parqueaderoFrontendApp', 
	['parqueaderoFrontendApp.constants', 
	'ngCookies',
    'ngResource', 
    'ngSanitize', 
    'ui.router', 
    'ui.bootstrap'
  ])
.constant("API","http://localhost:8080/ProyectoParqueadero")
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
