const reporter = require('cucumber-html-reporter');

const options = {
  // themes
  // )bootstrap
  // 2) hierarchy
  // 3) foundation
  // 4) symbol
  theme: 'bootstrap',
  jsonFile: 'cucumber_report.json',
  output: 'cucumber_report.html', // we take the json file and transform it into html with the selected theme
  reportSuiteAsScenarios: true,
  launchReport: false, // to automatically launch the report
};
reporter.generate(options);
