const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.
/*
    Complete the following functions.
    These functions only need to work with arrays.
    A few of these functions mimic the behavior of the `Built` in JavaScript Array Methods.
    The idea here is to recreate the functions from scratch BUT if you'd like,
    feel free to Re-use any of your functions you build within your other functions.
    **DONT** Use for example. .forEach() to recreate each, and .map() to recreate map etc.
    You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating

*/

function each(elements, cb) {
  // Do NOT use forEach to complete this function.
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each

  for(let index = 0; index < elements.length; index++){
    let value = elements[index];
    cb(value,index);
  }
}

each(items,(value,index) => {
    console.log(`index is ${index} value is ${value}`);
})