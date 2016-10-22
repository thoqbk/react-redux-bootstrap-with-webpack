var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, "client");
var APP_DIR = path.resolve(__dirname);

var config = {
  entry: APP_DIR + '/main.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:9000",
    "webpack/hot/only-dev-server",
    "./main.jsx"
  ],
  devServer: {
    contentBase: "./client",
    inline: true,
    port: 8000,
    colors: true,
    historyApiFallback: true
  },
  module : {
    loaders : [
      {
        test : /\.(js|jsx)$/,
        include : APP_DIR,
        loader : 'babel',
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./style")]
  }
};

module.exports = config;
