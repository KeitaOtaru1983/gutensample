const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      },
      {
        test: /\.scss/, // 対象となるファイルの拡張子
        // ローダー名
        use: [
          MiniCssExtractPlugin.loader,
          // CSSをバンドルするための機能
          {
            loader: "css-loader",
           
          },
          // Sassをバンドルするための機能
          {
            loader: "sass-loader",
          }
        ]
      },
     
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/style.css'
    })
  ]
}
