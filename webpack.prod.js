const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');
var common = require('./webpack.common');

module.exports = merge(common,{
   devtool: "none",
    mode:"production",
    output:{
        filename:"[name].[hash].js",
        path: path.resolve(__dirname,"build")
    },
    module: {
    rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'],
        },
        {
              test: /\.js$/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              },
        },
       
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            "sass-loader"
          ],
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 30000,
                },
              },
              'image-webpack-loader'
            ],
        }
        ]
        
    },
    optimization: {
      minimizer:[
        new OptimizeCssAssetsPlugin(),
        new TerserPlugin(),
        new HtmlWebpackPlugin({
          template:'./index.html',
          minify:{
            removeAttributeQuotes:true,
            collapseWhitespace:true,
            removeComments:true
          }
      })



      ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        
      
    ]


})