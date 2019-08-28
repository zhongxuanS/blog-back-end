const log4js = require('log4js');
const logger = log4js.getLogger();
log4js.configure({
  appenders: {
    out: {
      type: 'stdout',
      layout: {
        type: 'pattern', pattern: '[%d] [%p] %m [%f{1}:%l]%n'
      }
    }
  },
  categories: {
    default: { appenders: ['out'], level: 'info', enableCallStack: true }
  }
});

logger.level = 'debug';

module.exports = logger;