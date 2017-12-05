'use strict';

describe('Component: CarrosCreateComponent', function () {

  // load the controller's module
  beforeEach(module('parqueaderoFrontendApp'));

  var CarrosCreateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CarrosCreateComponent = $componentController('CarrosCreateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
