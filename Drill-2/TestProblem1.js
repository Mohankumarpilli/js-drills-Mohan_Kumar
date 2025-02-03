const data = require('./Data');

const car_id = require('./Problem1');



try{

    let n =33;

    let result = car_id(data, n);

    console.log(`Car ${n} is a ${result.car_year} ${result.car_make} ${result.car_model}`);

}catch(error){
    console.log(error.message);
}