const path = require('path');
module.exports = {
  mode: 'development',
  entry: './blocks.js',
  output: {
     path: __dirname,
    filename: 'blocks.build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env','@babel/preset-react', '@babel/preset-flow'] 
        }
      }
    ]
  }
}
