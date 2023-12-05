// import { EnvironmentPlugin } from 'webpack';
// const Dotenv = require('dotenv-webpack');
// module.exports = {
//   plugins: [new Dotenv()],
// };

const webpack = require('webpack')
const path = require('path')
const environment = require('src/environments/environment')

const env = environment.production ? null : 'development'

const dotenv = require('dotenv').config(
  { 
    path: path.resolve(process.cwd(), `${env}.env`)
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