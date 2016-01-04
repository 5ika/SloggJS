var chalk = require('chalk');

function time() {
  var now = new Date();
  return now.toLocaleString();
}

module.exports = slogg = function (context, color) {
  if(context) {
    if(color) {
      return function (msg) {
        console.log(chalk[color](time() + chalk.bold(' [' + context + '] ') + msg));
      }
    } else return function (msg) {
      console.log(chalk.bold('[' + context + '] ') + msg);
    }
  } else {
    var slogg = {
      log: function (msg) {
        console.log(time() + ' ' + msg);
      },
      info: function (msg) {
        console.log(chalk.cyan(time() + ' ' + msg));
      },
      debug: function (msg) {
        console.info(chalk.white.bgRed(time() + ' ' + msg));
      },
      warn: function (msg) {
        console.warn(chalk.yellow(time() + ' ' + msg));
      },
      error: function (msg) {
        console.error(chalk.red.bold(time() + ' ' + msg));
      }
    }

    var contexts = require('./contexts.js');
    contexts.forEach(function (context) {
      slogg[context.name] = function (msg) {
        console.log(chalk[context.color](time() + chalk.bold(' [' + context.prefix + '] ') + msg))
      }
    });

    return slogg;
  }
};
