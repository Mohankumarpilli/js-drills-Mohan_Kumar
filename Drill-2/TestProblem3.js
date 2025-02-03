const data = require('./Data')

const sort_car = require('./Problem3')

try{
    console.log(sort_car(data));
}catch(error){
    console.log(error.message);
}