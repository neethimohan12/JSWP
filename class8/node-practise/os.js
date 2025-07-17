const os = require('os');
console.log('Home directory:', os.homedir());
console.log('Total memory:', os.totalmem());
console.log('CPUs:', os.cpus().length);