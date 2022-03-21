process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const { environment } = require('@rails/webpacker')
const webpack = require("webpack")

environment.plugins.append("Provide", new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Popper: ['popper.js', 'default']
}))


module.exports = environment.toWebpackConfig()
