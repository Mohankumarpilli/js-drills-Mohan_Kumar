const data = require('./Data');

const year = require('./Problem4')

try{
    console.log(year(data));
}catch(error){
    console.log(error.message);
}