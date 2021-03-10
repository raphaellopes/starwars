// Vendors
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebfontLoader = require('webfonts-loader');

const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  entry: './src/index.tsx',
  target: 'web',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      '~components': path.resolve(srcPath, 'components'),
      '~config': path.resolve(srcPath, 'config'),
      '~styles': path.resolve(srcPath, 'styles'),
      '~services': path.resolve(srcPath, 'services'),
      '~store': path.resolve(srcPath, 'store'),
      '~assets': path.resolve(srcPath, 'assets'),
      '~shared': path.resolve(srcPath, 'shared'),
    },
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.font\.js/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          'webfonts-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(srcPath, 'public', 'index.html'),
      base: '/',
    }),
    new MiniCssExtractPlugin(),
  ],
};
