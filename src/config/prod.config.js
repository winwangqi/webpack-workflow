/* production configuration */
import { defaultsDeep } from 'lodash';
import baseConfig from './base.config';

const prodConfig = defaultsDeep(baseConfig, {
  
});

module.exports = prodConfig;
