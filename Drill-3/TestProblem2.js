const data = require('./Data')
const person_in_germany = require('./Problem2');
try{
    console.log(person_in_germany(data));
}catch(error){
    console.log(error.message);
}