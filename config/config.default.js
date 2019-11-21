/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1573723338704_2908';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  //
  config.view = {
    root: path.join(appInfo.baseDir, 'app/view'),
    mapping: {
      '.html': 'nunjucks',
    },
  };

  config.assets = {
    // 配置cdn https://cdn.test.com/web
    // url: 'https://cdn.test.com',
    // publicPath: '/web',
    publicPath: 'public/web',
    devServer: {
      autoPort: true,
      command: 'cross-env UMI_ENV=dev umi dev --port={port}',
      env: {
        APP_ROOT: path.join(__dirname, '../app/web'),
        BROWSER: 'none',
        SOCKET_SERVER: 'http://127.0.0.1:{port}',
      },
      debug: true,
    },
  };

  config.securit = {
    csrf: {
      // enable: false,
      headerName: 'x-csrf-token'
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
