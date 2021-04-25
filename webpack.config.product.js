const { merge } = require('webpack-merge');
const { DefinePlugin } = require("webpack");
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [
    new DefinePlugin({
      'process.env.API_URL' : '"https://api.kokasai.com"'
    })
  ]
});
