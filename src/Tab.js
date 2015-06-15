var util = require('util');
var EventEmitter = require('events').EventEmitter;

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