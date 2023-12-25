const path = require('path');

const rootDir = path.resolve(__dirname, '..');

module.exports = {
  target: 'node',
  entry: './src/server.tsx',
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: 'server.js',
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
