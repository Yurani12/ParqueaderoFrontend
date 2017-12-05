'use strict';

angular.module('parqueaderoFrontendApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('parqueadero', {
        url: '/parqueadero',
        template: '<parqueadero></parqueadero>'
      });
  });
