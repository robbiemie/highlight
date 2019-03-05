const { resolve } = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const cwd = process.cwd()
const rootPath = resolve(cwd, './')

module.exports = {
  mode: 'development',
  entry: {
    app: resolve(__dirname, '../src/index')
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    open: true,
    quiet: true,
    port: 4000
  },
  resolve: {
    alias: {
      '@': resolve(rootPath, './src')
    }
  },
  resolveLoader: {
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.(css|scss)$/,
      use: [
        'vue-style-loader',
        'css-loader'
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, '../src/html/index.html')
    }),
    new VueLoaderPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ]
}
