// Vendors
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  entry: './src/index.tsx',
  target: 'web',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      '~components': path.resolve(srcPath, 'components'),
      '~styles': path.resolve(srcPath, 'styles'),
    },
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(srcPath, 'public', 'index.html'),
    }),
  ],
};
