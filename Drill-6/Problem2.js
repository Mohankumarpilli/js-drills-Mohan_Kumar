  
  function limitFunctionCallCount(cb, n) {
    // Should return a function that invokes `cb`.
    // The returned function should only allow `cb` to be invoked `n` times.
    // Returning null is acceptable if cb can't be returned
    let count = 0;
    return () => {
      if(count<n){
        count++;
        return cb();
      }else{
        return 'null';
      }
    }
  }

  const hello = limitFunctionCallCount(()=> 'hello',2);
  const b = limitFunctionCallCount(()=> 'hello',1);
  console.log(hello());
  console.log(b());
  console.log(b());
  console.log(hello());
  console.log(hello());
  console.log(b());


