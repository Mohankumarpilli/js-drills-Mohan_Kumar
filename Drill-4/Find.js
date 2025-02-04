const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.

function find(elements, cb) {
    // Do NOT use .includes, to complete this function.
    // Look through each value in `elements` and pass each element to `cb`.
    // If `cb` returns `true` then return that element.
    // Return `undefined` if no elements pass the truth test.
    
    for(let index = 0; index < elements.length; index++){
      let value = elements[index];
      if(cb(value,index)){
        return value;
      }
    }
    return undefined;
  }
  
  console.log(find(items, (value) => {
    return value === 5;
    
  }));
  
  
  
  