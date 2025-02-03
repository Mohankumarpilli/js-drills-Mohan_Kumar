const aged_at = require('./Problem7');

const data = require('./Data');

try{
    let age = 25;
    console.log(aged_at(data,age));
}catch(error){
    console.log(error.message);
}