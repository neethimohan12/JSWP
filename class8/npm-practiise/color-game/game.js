const chalk = require('chalk');
console.log(chalk.red('Red text!'));
console.log(chalk.blue('Blue text!'));
console.log(chalk.bgGreen('Green background!'));
// Rainbow text
const rainbow = [
 chalk.red('R'),
 chalk.yellow('A'),
 chalk.green('I'),
 chalk.blue('N'),
 chalk.magenta('B'),
 chalk.cyan('O'),
 chalk.white('W')
];
console.log(rainbow.join(''));