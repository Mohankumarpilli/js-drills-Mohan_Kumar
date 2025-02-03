const data = require('./Data');

const {interested_in} = require('./Problem6')

try{
    console.log(JSON.stringify(interested_in(data)));
}catch(error){
    console.log(error.message);
}