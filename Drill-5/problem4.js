const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions

function pairs(obj) {
    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs
  
    let result = [];
  
    for(let i in obj){
      let key_value = [i, obj[i]];
      result.push(key_value)
    }
    return result;
  }
  
  console.log(pairs(testObject));