const print_city = require('./Problem8');

const data = require('./Data');

try{
    print_city(data);
}catch(error){
    console.log(error.message);
}