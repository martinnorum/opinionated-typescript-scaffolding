const webpack = require('webpack')
const createConfig = require('./make-webpack-config')

module.exports = createConfig({
  entry: [
    'babel-polyfill',
    './src/index.jsx'
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  devtool: 'cheap-module-source-map',
  minify: true
})
