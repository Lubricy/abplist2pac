var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  module: {
    rules: [{
      test: /\.txt$/,
      use: 'raw-loader'
    }]
  },
  output: {
    filename: 'proxy.pac.js',
    path: path.resolve(__dirname, 'dist'),
    library:"FindProxyForURL",
    libraryTarget:"var"
  }
};
