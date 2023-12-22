const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const rootDir = path.resolve(__dirname, '..');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(rootDir, 'dist/client'),
    filename: 'main.js',
  },
  resolve: {
    modules: ['node_modules', path.resolve(rootDir, 'src')],
    extensions: ['.ts', '.js', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      scriptLoading: 'defer',
    }),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({}),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
