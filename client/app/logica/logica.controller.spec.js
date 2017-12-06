'use strict';

describe('Component: LogicaComponent', function () {

  // load the controller's module
  beforeEach(module('parqueaderoFrontendApp'));

  var LogicaComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    LogicaComponent = $componentController('LogicaComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
