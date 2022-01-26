const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader'}
        ]
      },
      // {
      //   test: /\.m?js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: ["@babel/preset-env", "@babel/preset-react"]
      //     }
      //   }
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ],
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3006
  }
};