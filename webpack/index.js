const production = require('./production');
const development = require('./development');

let env = process.env.NODE_ENV;

if (!env || typeof env !== 'string') {
  // eslint-disable-next-line
  console.log("You don't specify NODE_ENV, so it forced to development mode");
  env = 'development';
}

let config;

if (env === 'production') {
  config = production;
} else {
  config = development;
}

if (!config) {
  throw new Error("Can't resolve any known webpack config");
}

module.exports = config;
