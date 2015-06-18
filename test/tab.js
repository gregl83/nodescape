var sinon = require('sinon');
var should = require('should');

var Tab = require('../src/Tab');

var sandbox;

describe('tab', function() {
  beforeEach(function () {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('new tab instance', function(done) {
    var go = sandbox.stub(Tab.prototype, 'go');

    var options = {
      start: 'about:blank'
    };
    var tab = new Tab(options);

    should(tab).be.instanceOf(Tab);

    should(tab.history).be.Array;
    should(tab.history.length).eql(0);

    sinon.assert.calledOnce(go);
    sinon.assert.calledWithExactly(go, options.start);

    done();
  });

  it('new tab instance sans options', function(done) {
    should.throws(function() {
      var tab = new Tab();
    });

    done();
  });

  it('go to url', function(done) {
    // todo
    done();
  });

  it('refresh', function(done) {
    // todo
    done();
  });

  it('back', function(done) {
    // todo
    done();
  });

  it('forward', function(done) {
    // todo
    done();
  });

  it('close', function(done) {
    // todo
    done();
  });
});