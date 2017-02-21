var webpack = require('webpack');
var ignore = new webpack.IgnorePlugin(/\.svg$/)

module.exports = {
  devtool: 'source-map',
  entry: {
    main: [
      './client/src/index.js',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
    ],
  },
  output: {
    publicPath: 'http://localhost:9090/',
    filename: '/js/[name].js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
    ],
  },
  postcss: () => {
    return [
      require('precss'),
      require('autoprefixer')
    ];
  },
  plugins: [ignore],
  devServer: {
    host: '0.0.0.0',
    port: '3000',
    proxy: {
    },
  },
};
