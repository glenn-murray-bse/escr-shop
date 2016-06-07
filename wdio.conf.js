exports.config = {

  /**
   * server configurations
   */
  host: '0.0.0.0',
  port: 4444,
  /**
   * specify test files
   */
  specs: [
    './specs/*.feature'
  ],
  //exclude: [
  //  'test/spec/multibrowser/**',
  //  'test/spec/mobile/**'
  //],

  /**
   * capabilities
   */
  capabilities: [{
    browserName: 'chrome'
  }],

  /**
   * test configurations
   */
  logLevel: 'silent',
  coloredLogs: true,
  screenshotPath: 'shots',
  waitforTimeout: 10000,
  framework: 'cucumber',

  reporters: ['dot', 'junit'],
  reporterOptions: {
    outputDir: './specs/reports'
  },

  cucumberOpts: {
    require: ['./specs/steps/step-definitions.js']
  }
};