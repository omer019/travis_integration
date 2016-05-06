exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
	//seleniumServerJar: './node_modules/protractor/selenium/latest.jar'
	specs: ['Asynchronous.js'],
//	specs: ['newds.js'],

  capabilities: {
    'browserName': 'chrome'
  },

	onPrepare: function() {
	var AllureReporter = require('../../index.js');  
/*	onPrepare: function() {
	require('jasmine-reporters');
	jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter('../e2e_test_out', true, true, 'testresults.e2e.'));
*/
//	browser.driver.manage().timeouts().setScriptTimeout(90000);  
	browser.driver.manage().timeouts().pageLoadTimeout(90000);
	
    jasmine.getEnv().addReporter(new AllureReporter({
      allureReport: {
        resultsDir: 'allure-results'
      }
    }));
	
	
  },
};
