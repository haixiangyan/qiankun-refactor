const { name } = require('../package.json')

// 更新打包输出内容
const updateOutput = (config) => {
  config.output.library = `${name}-[name]`;
  config.output.libraryTarget = 'umd';
  // config.output.jsonpFunction = `webpackJsonp_${name}`;
  config.output.globalObject = 'window';

  return config;
}

// 更新 dev server
const updateDevServer = (devServerConfig) => {
  devServerConfig.headers = {
    'Access-Control-Allow-Origin': '*',
  };
  devServerConfig.historyApiFallback = true;
  devServerConfig.hot = false;
  devServerConfig.watchContentBase = false;
  devServerConfig.liveReload = false;

  return devServerConfig;
}

module.exports = {
  updateOutput,
  updateDevServer,
}
