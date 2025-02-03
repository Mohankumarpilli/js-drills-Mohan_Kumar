const {last_car,latest_car} = require('./Problem2');

const data = require('./Data');

const res = latest_car(data);

console.log(`Last car is a ${res.car_make} ${res.car_model}`);

const res1 = last_car(data);

console.log(`Last car is a ${res1.car_make} ${res1.car_model}`);