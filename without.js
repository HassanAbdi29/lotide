const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};
function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

const without = function (source, itemsToRemove) {
  const results = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)){
    results.push(item);
    }
  }
  return results;
};

let results = without([1,2,3,4], [2,4]);
console.log(results); 