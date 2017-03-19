const path = require('path');
const PATHS = {
  build: path.resolve(__dirname, 'build'),
};

const config = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
        exclude: path.join(__dirname, '/node_modules/'),
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
  },
};

module.exports = config;
