'use strict';

describe('Service: puesto', function () {

  // load the service's module
  beforeEach(module('parqueaderoFrontendApp'));

  // instantiate service
  var puesto;
  beforeEach(inject(function (_puesto_) {
    puesto = _puesto_;
  }));

  it('should do something', function () {
    expect(!!puesto).to.be.true;
  });

});
