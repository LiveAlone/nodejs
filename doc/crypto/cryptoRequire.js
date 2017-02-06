let crypto;
try {
  crypto = require('crypto');
  console.log('success crypto require');
} catch (err) {
  console.log('crypto support is disabled!');
}