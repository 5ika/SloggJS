// Il y a deux manières d'utiliser Slugg

// 1. En définissant des contextes dans le fichier slogg.json
var slogg = require('./index')();
slogg.log('Standard log');
slogg.info("Info");
slogg.debug('Debug');
slogg.warn('Warning');
slogg.error('Error');
slogg.update('New update available');
slogg.user('5ika is connected');
slogg.api('GET /users/list from 192.168.1.50');
slogg.info({
    type: 'object',
    value: {
        type: 'string',
        value: 'Hello'
    }
});

// 2. En définissant un contexte pour l'ensemble du module
var log = require('./index')('SERVER', 'magenta');
log('The server is shutting down');
log({
    type: 'object',
    value: {
        type: 'string',
        value: 'Hello'
    }
});
