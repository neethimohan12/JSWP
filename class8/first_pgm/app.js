const _ = require('lodash');
// Easy array operations
const numbers = [3, 1, 4, 1, 5 , 4];
console.log(_.sum(numbers)); // 14
console.log(_.uniq(numbers)); // [3,1,4,5]