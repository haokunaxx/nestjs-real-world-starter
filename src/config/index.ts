import config_dev from './env.development';
import config_prod from './env.production';

const configs = {
  development: config_dev,
  production: config_prod,
};

const env = configs[process.env.NODE_ENV || 'development'];

export { env };
