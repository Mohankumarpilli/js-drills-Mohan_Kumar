const data = require('./Data');

const hobby = require('./Problem2');

try{
    console.log(hobby(data));
}catch(error){
    console.log(error.message);
}