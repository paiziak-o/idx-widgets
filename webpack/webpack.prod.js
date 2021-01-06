const path = require('path');
const merge = require('webpack-merge');

const base = require('./webpack.base.js');

module.exports = merge(base, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'bundle.min.js'
  },
});
