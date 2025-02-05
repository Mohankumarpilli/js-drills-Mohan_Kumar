function counterFactory() {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.

    let count = 0;
    return {
        increment: () => {
        count++;
        return count;
      },decrement: () => {
        count--;
        return count;
      }
    }
  }

  const obj = counterFactory();
  console.log(obj);
  console.log(obj.increment());
  console.log(obj.increment());
  console.log(obj.decrement());
  console.log(obj.decrement());
  console.log(obj.increment());

