const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = function createConfig(options) {

  options.plugins = options.plugins || []

  const plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("css/style.css", {
      allChunks: true
    }),
    ...options.plugins
  ]

  if(options.minify) {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      })
    )
  }


  // Return config
  return {
    entry: options.entry,
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'react-hot!babel'
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract("style-loader", "css!sass")
        },
        {
          test: /\.sass$/,
          loader: ExtractTextPlugin.extract("style-loader", "css!sass")
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/public',
      publicPath: '/',
      filename: 'js/bundle.js',
    },
    devServer: {
      contentBase: './public',
      hot: true
    },
    devtool: options.devtool,
    plugins: plugins
  }
}
