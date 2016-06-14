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
    browserName: 'firefox'
  }],

  /**
   * test configurations
   */
  logLevel: 'silent',
  coloredLogs: true,
  screenshotPath: 'shots',
  waitforTimeout: 10000,
  framework: 'cucumber',

  reporters: ['dot'],

  cucumberOpts: {
    require: ['./specs/steps/step-definition/step-definitions.js',
      './specs/steps/step-definition/modal.js',
      './specs/steps/step-definition/checkout.js'
    ],
    tags:['@pj']
  }
};