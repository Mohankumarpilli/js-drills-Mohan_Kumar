const data = require('./Data');

const at_index = require('./Problem4');

try{
    let id  = 300;
    console.log(at_index(data,id));
}catch(error){
    console.log(error.message);
}