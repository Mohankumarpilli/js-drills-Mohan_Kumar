const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

function flatten(elements) {
  // Flattens a nested array (the nesting can be to any depth).
  // Hint: You can solve this using recursion.
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let res = [];
  for(let index = 0; index < elements.length; index++){
    if(Array.isArray(elements[index])){
      res.push(...flatten(elements[index]));
    }else{
      res.push(elements[index]);
    }
  }
  return res;
}

console.log(flatten(nestedArray));
