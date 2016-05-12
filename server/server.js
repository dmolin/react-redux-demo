const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack/webpack.dev.config')

const devServerPort = config.devServerPort;
const devServerHost = config.devServerHost;

const isDevelopment = process.env.NODE_ENV !== 'production';
const port = isDevelopment ? devServerPort : process.env.PORT;
const app = express();

var publicPath = path.resolve(__dirname, '../public')
app.use(express.static(publicPath))

if (isDevelopment) {
  console.log("Development mode is active.");
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    //contentBase: 'src',
    historyApiFallback: true,
    //noInfo: true,
    headers: {'Access-Control-Allow-Origin': '*'},
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    console.log("get. read file", path.join(__dirname, '../index.html'));
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '../index.html')));
    res.end();
  });
} else {
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

app.listen(port, devServerHost, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
