const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');
module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(js?x)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
      ,
      {
        test: /\.(css)$/,
        use: {
          loader: 'css-loader'
        },
      }
    ]
  }
  // devtool: 'cheap-module-eval-source-map',
  // devServer: {
  //   contentBase: path.join(__dirname, '/client/dist'),
  // },
};