var fs = require('fs');

console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
conosle.log('C');



