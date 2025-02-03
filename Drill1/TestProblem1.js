const get_all_emails = require('./Problem1');

const data = require('./Data');

try{
    console.log(get_all_emails(data));
}catch(error){
    console.log(error.message);
}