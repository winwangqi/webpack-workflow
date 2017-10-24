/* development configuration */
import { defaultsDeep } from 'lodash';
import baseConfig from './base.config';

const devConfig = defaultsDeep(baseConfig, {
  
});

module.exports = devConfig;