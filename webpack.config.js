const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 3000;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode:"development",
  // Webpack configuration goes here
  entry: {
    app:"./src/js/index.js",
    vendor:['react']
  },
  output: {
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true,
          }
        }
      })
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
    hot:true
  }
};
