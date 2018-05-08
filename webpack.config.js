const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')
const ManifestPlugin = require('webpack-manifest-plugin')

let environment = process.env.NODE_ENV || process.env.RACK_ENV || process.env.RAILS_ENV || 'development'
let configPath = process.env.PACKER_CONFIG_PATH
if (!configPath) {
  console.warn('PACKER_CONFIG path not set, defaulting to config/packer.yml')
  configPath = path.resolve('config', 'packer.yml')
}
let config = yaml.safeLoad(fs.readFileSync(configPath))[environment]

module.exports = {
  context: path.join(__dirname, config.source_path),
  entry: {
    app: './packs/app.js',
    style: './packs/style.scss'
  },
  output: {
    path: path.join(__dirname, config.public_path, config.public_output_path),
    publicPath: `/${config.public_output_path}/`
  },
  devServer: {
    port: 3035
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: true } }, // ,
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /\/node_modules\//,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpe?g|gif|svg|png)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new ManifestPlugin({ writeToFileEmit: true })
  ]
}
