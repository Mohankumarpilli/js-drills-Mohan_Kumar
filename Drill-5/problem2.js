const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions

function values(obj) {
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values
  
    let result = [];
    for(let key in obj){
      result.push(obj[key]);
    }
    return result;
  }
  
  console.log(values(testObject));