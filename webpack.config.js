const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')
const ManifestPlugin = require('webpack-manifest-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let environment = process.env.NODE_ENV || process.env.RACK_ENV || process.env.RAILS_ENV || 'development'
let production = !['development', 'test'].includes(environment)
let configPath = process.env.PACKER_CONFIG_PATH
if (!configPath) {
  console.warn('PACKER_CONFIG path not set, defaulting to config/packer.yml')
  configPath = path.resolve('config', 'packer.yml')
}
let config = yaml.safeLoad(fs.readFileSync(configPath))[environment]

module.exports = {
  context: path.join(__dirname, config.source_path),
  entry: {
    style: './packs/style.scss',
    app: './packs/app.js'
  },
  output: {
    path: path.join(__dirname, config.public_path, config.public_output_path),
    publicPath: `/${config.public_output_path}/`,
    filename: production ? '[name]-[chunkhash].js' : '[name].js',
    chunkFilename: production ? '[name]-[chunkhash].chunk.js' : '[name].chunk.js'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  devServer: {
    port: 3035
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /\/node_modules\//,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpe?g|gif|svg|png)$/,
        loader: 'file-loader',
        options: {
          name: production ? '[path][name]-[hash].[ext]' : '[path][name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: production ? '[name]-[hash].css' : '[name].css',
      chunkFilename: production ? '[id]-[hash].css' : '[id].css'
    }),
    new ManifestPlugin({ writeToFileEmit: true }),
    new CompressionPlugin({
      test: /\.(js|css|svg)$/
    })
  ]
}
