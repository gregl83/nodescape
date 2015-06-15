var sinon = require('sinon');

var Nodescape = require('../');


var sandbox;

describe('nodescape', function() {
  beforeEach(function () {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('new instance sans context', function(done) {
    // todo new jar if context empty
    // todo
    done();
  });

  it('new instance with context', function(done) {
    // todo
    done();
  });

  it('create tab', function(done) {
    // todo
    done();
  });

  it('get existing tab', function(done) {
    // todo
    done();
  });

  it('get active tabs', function(done) {
    // todo
    done();
  });

  it('close', function(done) {
    // todo
    done();
  });
});