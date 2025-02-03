const data = require('./Data');

const students = require('./Problem3');

try{
    console.log(students(data));
}catch(error){
    console.log(error.message);
}