const tail = require('../tail');
const assertEqual = require('../assertEqual');


const str = ["hello", "Lighthouse", "Labs"];
assertEqual(str.length, 3);
assertEqual(tail(str).length, 2);

console.log(tail([1, 2, 3, 4, 5]));