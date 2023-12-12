const webpack = require('webpack')
const path = require('path')
const envFile = process.env['NODE_ENV'] == 'production' ? '.env' : '.development.env'
console.log(`Env: ${process.env['NODE_ENV']}`)
const dotenv = require('dotenv').config(
  {
    path: path.resolve(process.cwd(), envFile)
  }
)
module.exports = (config: any, opts: any, context: any) => {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed)
    })
  )

  return config
}