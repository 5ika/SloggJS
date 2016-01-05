Slogg est un logger pour NodeJS qui se veut simple d'utilisation et customisable.

Il permet de créer des _contextes_ de messages de log pour réunir les messages autrement qu'avec les standards log, info, warn, error...

# Installation
Slugg s'installe facilement dans votre projet avec npm :

```bash
npm install --save slogg
```

# Utilisation
## Avec le fichier slogg.json
Cette manière permet de définir des contextes dans un fichier _slogg.json_ à placer dans le dossier racine du projet. Le fichier _slogg.json_ doit respecter la structure suivante :

```
[
  {
    "name": "Nom du contexte",
    "color": "Une couleur parmis ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'black']",
    "prefix": "Chaîne de caractères qui préfixera les messages correspondant au contexte"
  },
  ...
]
```

Un exemple est disponible dans le fichier _slogg.example.json_ :

```bash
mv node_modules/slogg/slogg.examples.json ./slogg.example.json
```

Il est ensuite possible d'utiliser les contextes de la manière suivante :

```javascript
var slogg = require('slogg')();

slogg.update('New update available');
slogg.user('5ika is connected');
slogg.api('GET /users/list from 192.168.1.50');
```

Par défaut, les contextes standards sont disponibles :

```javascript
slogg.log('Standard log');
slogg.info("Info");
slogg.debug('Debug');
slogg.warn('Warning');
slogg.error('Error');
```

Il est cependant possible de les ré-écrire à partir du fichier _slogg.json_.

## Avec un contexte pour tout le module
Si un module correspond à un seul contexte, il est possible de fixer un contexte pour l'ensemble du module. Dans ce cas, le fichier _slogg.json_ n'est pas utilisé.

```javascript
var slogg = require('slogg')('SERVER', 'magenta');

slogg("The server is shutting down");
```

# Exemple
Un exemple d'utilisation se trouve dans le fichier _example.js_.

```bash
node example
```

![](https://raw.githubusercontent.com/5ika/SloggJS/master/example.png)
