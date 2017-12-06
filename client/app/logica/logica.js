'use strict';

angular.module('parqueaderoFrontendApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('logica', {
        url: '/logica',
        template: '<logica></logica>'
      });
  });
