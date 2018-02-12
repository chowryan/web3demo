const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    // 'react-hot-loader/patch',
    // 'webpack-hot-middleware/client?http://localhost:1337',
    // 'webpack/hot/only-dev-server',
    './client/src/app.js'],
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', ['env', { modules: false }], 'stage-2'],
          },
        },
      },
    ],
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './client/src/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
