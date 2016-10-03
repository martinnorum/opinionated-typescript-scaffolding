const createConfig = require('./make-webpack-config')
const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = createConfig({
  entry: [
    'babel-polyfill',
    './src/index.jsx'
  ],
  devtool: 'source-map',
  minify: false,
  plugins: [
    new WebpackNotifierPlugin()
  ]
})
