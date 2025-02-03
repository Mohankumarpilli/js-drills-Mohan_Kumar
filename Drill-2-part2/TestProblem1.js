const data = require('./Data');

const car_id = require('./Problem1');

let n = 33;

let result = car_id(data, n);

if(result){
    console.log(`Car ${n} is a ${result.car_year} ${result.car_make} ${result.car_model}`);
}else{
    console.log('some thing went wrong')
}