const fs = require('fs')

fs.stat('./toDelete.txt', (err, stats) => {
  if (err) throw err;
  console.log(`stats: ${JSON.stringify(stats)}`);
});