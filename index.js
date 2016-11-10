const chalk = require('chalk');
const logger = require('./logger');
function time() {
    var now = new Date();
    return now.toLocaleString();
}
module.exports = slogg = function (context, color) {
    if (context) {
        if (color) {
            return function (msg) {
                logger((msg) => chalk[color](time() + chalk.bold(' [' + context + '] ') + msg), msg);
            };
        } else
            return function (msg) {
                loger((msg) => chalk.bold('[' + context + '] ') + msg, msg);
            };
    } else {
        var slogg = {
            log: function (msg) {
                logger((msg) => time() + ' ' + msg, msg);
            },
            info: function (msg) {
                logger((msg) => chalk.cyan(time() + ' ' + msg), msg);
            },
            debug: function (msg) {
                logger((msg) => chalk.white.bgRed(time() + ' ' + msg), msg);
            },
            warn: function (msg) {
                logger((msg) => chalk.yellow(time() + ' ' + msg), msg);
            },
            error: function (msg) {
                logger((msg) => chalk.red.bold(time() + ' ' + msg), msg);
            }
        };
        var contexts = require('./contexts.js');
        contexts.forEach(function (context) {
            slogg[context.name] = function (msg) {
                logger((msg) => chalk[context.color](time() + chalk.bold(' [' + context.prefix + '] ') + msg), msg);
            };
        });
        return slogg;
    }
};
