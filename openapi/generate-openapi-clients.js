const { execSync } = require('child_process');

const scripts = require('./openapi.config.json');
Object.keys(scripts).forEach(function (key) {
  console.log('running script ' + key);
  execSync(scripts[key]);
  console.log('Finished script ' + key);
});