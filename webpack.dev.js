const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require('webpack-merge');
var common = require('./webpack.common');

module.exports = merge(common,{
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        loader: [
            "style-loader", 
            "css-loader",
            "sass-loader"
        ]
      },
     
      {
          test: /\.(png|jpg|jpeg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                outputPath:'assets/imgs',
                esModule:false
              },
            },
          ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
});
