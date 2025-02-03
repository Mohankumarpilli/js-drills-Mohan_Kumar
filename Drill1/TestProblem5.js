const data = require('./Data');

const print_ages = require('./Problem5');

try{
    console.log(print_ages(data));
}catch(error){
    console.log(error.message);
}