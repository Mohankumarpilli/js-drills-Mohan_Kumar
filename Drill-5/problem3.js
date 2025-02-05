const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions

function mapObject(obj, cb) {
    // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
    // http://underscorejs.org/#mapObject
  
    for(let index in obj){
      let value = obj[index];
      obj[index] = cb(value);
    }
    return obj;
  }
  
  console.log(mapObject(testObject, (x) => typeof(x) === 'string' ? x.toUpperCase() : x));
  
  /* STRETCH PROBLEMS */