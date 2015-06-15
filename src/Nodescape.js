var config = require('config');

// todo define browser interface (use familiar terminology/interface such as chrome or firefox)

// todo write headless browser with tab support (based off jsdom)

// todo publish beta

function Nodescape() {
  var self = this;

  // todo consider page cache

  // todo consider developer tools vs standalone jquery

  self.location = config.get('location');

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