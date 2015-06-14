var config = require('config');

// todo define browser interface (use familiar terminology/interface such as chrome or firefox)

// todo write headless browser with tab support (based off jsdom)

// todo publish beta

function Nodescape() {
  var self = this;

  // todo consider page cache

  // todo consider developer tools vs standalone jquery

  self.history = [];

  self.location = config.get('location');

  // todo
}

module.exports = Nodescape;