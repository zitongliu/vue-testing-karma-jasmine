module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine', 'jasmine-matchers'],
    files: ['test/**/*.js'],
    reporters: ['progress', 'coverage'],
    preprocessors: {
      'test/*.js': ['webpack']
    },
    singleRun: true,

    webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
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
      }
    }
  });
};
