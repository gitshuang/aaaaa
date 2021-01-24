const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devtool: 'source-map',
    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        'store': path.resolve('./src/store'),
        'component': path.resolve('./src/component'),
      }
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
         new HtmlWebpackPlugin({
           title: 'Development',
           template: 'template/index.ejs'
         }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: "style-loader", // creates style nodes from JS strings
            },
            {
              loader: "css-loader", // translates CSS into CommonJS
            },
            {
              loader: "less-loader", // compiles Less to CSS
            },
          ]
        }
      ]
    },
    devServer:{
      port:3000,
      open:true,
      contentBase: './dist',
    }
  };