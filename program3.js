var fs = require('fs');
var number_of_lines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;
console.log(number_of_lines);