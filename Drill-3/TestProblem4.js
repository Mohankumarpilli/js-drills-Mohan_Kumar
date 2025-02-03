const data = require('./Data');

const program_language = require('./Problem4');

try{
    console.log(program_language(data));
}catch(error){
    console.log(error.message);
}