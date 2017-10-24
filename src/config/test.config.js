/* test configuration */
import { defaultsDeep } from 'lodash';
import baseConfig from './base.config';

const testConfig = defaultsDeep(baseConfig, {
  
});

module.exports = testConfig;