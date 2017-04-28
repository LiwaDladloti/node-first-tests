const chalk = require('chalk')
const greet = require('./greet');

const style = chalk.bgRed.white(greet('Xola'));
console.log(style)
