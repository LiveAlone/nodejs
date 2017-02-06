const util = require('util')

const obj = {foo : 'this is not show in inspect condition'}
console.log(util.inspect(obj))

// obj[util.inspect.custom] = function(depth){
//     return {bar : "bar"};
// }
// console.log(util.inspect(obj));

// Object inspect object content
obj.inspect = function(depth){
    return {bar2: "bar2"};
}
console.log(util.inspect(obj));

