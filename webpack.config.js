var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
      path.resolve(__dirname, 'app/main.js'),
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080'
    ],
    devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/
            }
        ]
    },
};
