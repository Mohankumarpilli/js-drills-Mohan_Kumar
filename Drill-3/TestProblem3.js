const data = require('./Data');

const person_masters = require('./Problem3');

try{
    console.log(person_masters(data));
}catch(error){
    console.log(error.message);
}