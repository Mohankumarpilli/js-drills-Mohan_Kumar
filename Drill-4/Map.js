const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.

function map(elements, cb) {
    // Do NOT use .map, to complete this function.
    // How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
    // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
    // Return the new array.
    let result = [];
    for(let index = 0; index < elements.length; index++){
      let value = elements[index];
      let output = cb(value,index);
      result.push(output);
    }
  
    return result;
  }
  
  let double_array = map(items,(value,index) =>{
    return value*2;
  });
  
  console.log(double_array);
  