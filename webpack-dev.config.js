const createConfig = require('./make-webpack-config')

module.exports = createConfig({
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  devtool: 'source-map',
  minify: false
})
