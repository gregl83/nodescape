var request = require('request');
var jsdom = require('jsdom');

/**
 * Nodescape Tab
 *
 * @param {string} start location
 * @constructor
 */
function Tab(start) {
  var self = this;

  self.location = self.address = start;

  self.history = [];

  self.dom = null; // fixme
}


/**
 * Go to URL
 *
 * @param {string} url
 * @param {function} cb
 */
Tab.prototype.go = function(url, cb) {
  // todo use request and jsdom to get url contents
};


/**
 * Refresh tab
 *
 * @param {function} cb
 */
Tab.prototype.refresh = function(cb) {
  // todo consider caching of content and a hard refresh
  // todo refresh tab
};


/**
 * Go back n number of history records
 *
 * @param {integer} [n]
 * @param {function} cb
 */
Tab.prototype.back = function(n, cb) {
  // todo go back
};


/**
 * Go forward n number of history records
 *
 * @param {integer} [n]
 * @param {function} cb
 */
Tab.prototype.forward = function(n, cb) {
  // todo go forward
};


/**
 * Close tab
 *
 * @param {function} [cb]
 */
Tab.prototype.close = function(cb) {
  // todo close tab
};


module.exports = Tab;