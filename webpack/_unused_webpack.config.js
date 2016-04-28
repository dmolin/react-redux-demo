var webpack = require('webpack');

module.exports = {
  entry: {
    main: './app/bootstrap.js'
  },
  output: {
    path: __dirname + '/public/build',
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      plugins: ['transform-react-jsx'],
      query: {
        presets: ["es2015", "stage-0", "react"],
        cacheDirectory: true
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      query: {
        "parserOptions": {
          "ecmaVersion": 6,
          "sourceType": "module",
          "ecmaFeatures": {
            "jsx": true
          }
        }
      }
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.DEV || false))
    })
  ]
};
