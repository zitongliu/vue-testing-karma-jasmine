const path = require('path');

const configResolve = {
  alias: {
    vue: 'vue/dist/vue.js'
  }
}

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:  'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: 'vue-loader',
        test: /\.vue$/,
        exclude: /node_modules/
      }
    ]
  },
  resolve: configResolve
}

module.exports = config;
