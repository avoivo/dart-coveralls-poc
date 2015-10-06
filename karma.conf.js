module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['dart-unittest'],

    files: [
      "test/*_test.dart",
      "packages/guinness/init_specs.dart",
      {pattern: '**/*.dart', watched: true, included: false, served: true}
    ],


    autoWatch: true,
    captureTimeout: 60000,
    browserNoActivityTimeout: 300000,

    plugins: [
      'karma-dart',
      'karma-chrome-launcher'
    ],

    browsers: ['Dartium']
  });
};