const merge = require('webpack-merge');

const base = require('./webpack.base.js');

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});