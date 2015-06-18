var util = require('util');
var EventEmitter = require('events').EventEmitter;

var jsdom = require('jsdom');

/**
 * Nodescape Tab
 *
 * @param {object} options
 * @constructor
 */
function Tab(options) {
  var self = this;

  if ('undefined' === typeof options) throw new Error('options are required');

  self.location = options.start;

  self.history = [];

  self.window = undefined;

  self.go(self.location);
}


util.inherits(Tab, EventEmitter);


/**
 * Go to URL
 *
 * @param {string} url
 */
Tab.prototype.go = function(url) {
  // todo use request and jsdom to get url contents
};


/**
 * Refresh tab
 */
Tab.prototype.refresh = function() {
  // todo consider caching of content and a hard refresh
  // todo refresh tab
};


/**
 * Go back n number of history records
 *
 * @param {integer} [n]
 */
Tab.prototype.back = function(n) {
  // todo go back
};


/**
 * Go forward n number of history records
 *
 * @param {integer} [n]
 */
Tab.prototype.forward = function(n) {
  // todo go forward
};


/**
 * Close tab
 */
Tab.prototype.close = function() {
  // todo close tab
  // todo emit closed
};


module.exports = Tab;