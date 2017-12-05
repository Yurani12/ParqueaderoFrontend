'use strict';

angular.module('parqueaderoFrontendApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('carros-create', {
        url: '/carros-create',
        template: '<carros-create></carros-create>'
      });
  });
