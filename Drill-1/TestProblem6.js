const print_hobbies = require('./Problem6');

const data = require('./Data');

try{
    console.log(print_hobbies(data));
}catch(error){
    console.log(error.message);
}