var sinon = require('sinon');
var should = require('should');
var mockery = require('mockery');


mockery.enable({
  useCleanCache: false,
  warnOnReplace: false,
  warnOnUnregistered: false
});

var config = {
  get: function(){}
};
mockery.registerMock('config', config);

var request = {
  jar: function(){}
};
mockery.registerMock('request', request);


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
    var jar = {type: 'request-jar'};
    var requestJar = sandbox.stub(request, 'jar');
    requestJar.returns(jar);

    var configGet = sandbox.stub(config, 'get');

    var nodescape = new Nodescape();

    sinon.assert.calledOnce(requestJar);
    should(nodescape._jar).be.eql(jar);

    sinon.assert.calledOnce(configGet);
    sinon.assert.calledWithExactly(configGet, 'location');

    should(nodescape).be.instanceOf(Nodescape);

    done();
  });

  it('new instance with context', function(done) {
    var context = {
      jar: {type: 'context-jar'}
    };

    var requestJar = sandbox.stub(request, 'jar');
    var configGet = sandbox.stub(config, 'get');

    var nodescape = new Nodescape(context);

    sinon.assert.notCalled(requestJar);
    should(nodescape._jar).be.eql(context.jar);

    sinon.assert.calledOnce(configGet);
    sinon.assert.calledWithExactly(configGet, 'location');

    should(nodescape).be.instanceOf(Nodescape);

    done();
  });

  it('new tab', function(done) {
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