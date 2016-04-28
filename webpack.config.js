const path = require('path')
const webpack = require('webpack')
const Clean = require('clean-webpack-plugin')
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const TARGET = process.env.npm_lifecycle_event;
const appPath = path.join(__dirname, 'app')
const buildPath = path.join(__dirname, 'public/build')

process.env.BABEL_ENV = TARGET;

module.exports = {
  entry: [
    './app/bootstrap.js'
  ],
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: 'public/'
  },
  debug: true,
  //devtool: 'source-map', // big!!! skipping
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: appPath
      }
    ]
  },
  plugins: [
    new Clean(['.'], buildPath),
    new webpack.DefinePlugin({
      'process.env': {
        // This affects react lib size
        //'NODE_ENV': JSON.stringify('production')
      }
    }),
    new NpmInstallPlugin({
      save: true // --save
    })
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
};
