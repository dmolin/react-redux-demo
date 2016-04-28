var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('../webpack/webpack.dev.config')

var port = config.devServerPort
var host = config.devServerHost
var compiler = webpack(config)

var server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  noInfo: true,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {
    colors: true
  }
})

server.listen(port, host, function errorCallback(err) {
  if (err) {
    console.error(err);
  }

  console.info('==> 🚧  Webpack development server running on ' + host + ' and listening on port ' + port);
})
