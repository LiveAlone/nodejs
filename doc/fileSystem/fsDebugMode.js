function bad() {
  require('fs').readFile('/');
}

// command is env NODE_DEBUG=fs node script.js
bad();
