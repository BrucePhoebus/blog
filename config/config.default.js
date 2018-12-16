'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544947503267_8138';

  // add your config here
  config.middleware = [];

  config.view = {
    mapping: {
      '.html': 'art'
    }
  };

  return config;
};
