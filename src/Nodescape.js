var config = require('config');
var request = require('request');


/**
 * Nodescape is a NodeJS headless browser
 *
 * @param {object} context
 * @constructor
 */
function Nodescape(context) {
  var self = this;

  if ('undefined' === typeof context) context = {};

  // todo consider page cache

  // todo consider developer tools vs standalone jquery

  self._jar = (context.jar) ? context.jar : request.jar();

  self._location = config.get('location');

  self._tabs = {};
  self._activeTab = null; // todo consider new tab on construct...

  // todo
}


/**
 * Get new nodescape tab
 *
 * @returns {Tab} tab
 */
Nodescape.prototype.newTab = function() {
  // todo run tab in child process with limited global access (sans fs, etc)

  // todo create and return new tab
};


/**
 * Get existing tab
 *
 * @param{string} id
 * @returns {Tab} tab
 */
Nodescape.prototype.getTab = function(id) {
  // todo get tab from _tabs
};


/**
 * Close nodescape
 */
Nodescape.prototype.close = function() {
  // todo close all tabs
};


module.exports = Nodescape;