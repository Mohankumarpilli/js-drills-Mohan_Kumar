const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions

function defaults(obj, defaultProps) {
    // Fill in undefined properties that match properties on the `defaultProps` parameter object.
    // Return `obj`.
    // http://underscorejs.org/#defaults
    for(let key in defaultProps){

      if(!(key in obj)){
        obj[key] = defaultProps[key];
      }

    }
    return obj;
  }
  const user = { name: "Mohan", country: 'india' };
  console.log(defaults(testObject,user));