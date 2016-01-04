var path = require('path');
var chalk = require('chalk');
var contextsPath = path.dirname(require.main.filename) + '/slogg.json';
var fs = require('fs');

try {
  fs.lstatSync(contextsPath);
  var contexts = require(contextsPath);
} catch(err) {
  console.warn(chalk.red.bold("\nNo slogg.json file in project folder\n"));
  contexts = [];
}

module.exports = contexts;
