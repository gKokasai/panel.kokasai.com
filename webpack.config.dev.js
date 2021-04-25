const { merge } = require('webpack-merge');
const { DefinePlugin } = require("webpack");
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "source-map",
  plugins: [
    new DefinePlugin({
      'process.env.API_URL' : '"https://dev-api.kokasai.com"'
    })
  ],
  devServer: {
    historyApiFallback: true,
    host: 'local-panel.kokasai.com',
    port: 8080
  }
});
