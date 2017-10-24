switch (process.env.NODE_ENV) {
  case 'development':
    module.exports = require('./dev.config');
    break;
  case 'production':
    module.exports = require('./prod.config');
    break;
  case 'test':
    module.exports = require('./test.config');
    break;
  default:
    module.exports = require('./prod.config');
}