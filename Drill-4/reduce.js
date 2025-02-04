const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.

// function reduce(elements, cb, startingValue) {

//   let total = startingValue !== undefined ? startingValue : elements[0];

//   let startindex = 0;


// }

function reduce(elements, cb, startingValue) {

//   // Do NOT use .reduce to complete this function.
//   // How reduce works: A reduce function combines all elements into a single value going from left to right.
//   // Elements will be passed one by one into `cb` along with the `startingValue`.
//   // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
//   // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.

    let total = startingValue !== undefined ? startingValue : elements[0];
  
    for (let index = 0; index < elements.length; index++) {
      total = cb(total, elements[index]);
    }
  
    return total;
}
  
console.log(reduce(items, (acc, value) => acc + value, 0)); 