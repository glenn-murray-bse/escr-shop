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
    './specs/**.feature'
  ],
  //exclude: [
  //  'test/spec/multibrowser/**',
  //  'test/spec/mobile/**'
  //],

  chromeDriver: './chromedriver',
  directConnect: true,

  /**
   * capabilities
   */
  capabilities: [{
      'browserName': 'firefox'
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
    require: ['./specs/step-definitions/step-definitions.js',
      './specs/step-definitions/modal.js',
      './specs/step-definitions/checkout.js'
    ],
    tags:['@pj']
  }
};