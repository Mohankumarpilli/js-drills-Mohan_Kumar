const data = require('./Data');

const car_id = require('./Problem1');

let n = 10;

let result = car_id(data, n);

console.log(`Car 33 is a ${result.car_year} ${result.car_make} ${result.car_model}`);
