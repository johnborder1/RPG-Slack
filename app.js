'use strict';

const logger = require('./lib/logger')();
const redact = require('redact-object');
const Bot = require('./lib/bot');
const Config = require('./lib/config');

let bot;
let config;

/**
 * Load config
 */
const rawConfig = (() => {
  let retVal;
  try {
    retVal = require('./config');
  } catch (exception) {
    logger.warn('No config file found, loading defaults');
    retVal = require('./config.default');
  }

  return retVal;
})();

try {
  config = Config.parse(rawConfig);
} catch (error) {
  logger.error('Could not parse config', error);
  process.exit(1);
}

logger.info('Using the following configuration:', redact(config, ['token', 'pass']));

bot = new Bot(config);
bot.start();
