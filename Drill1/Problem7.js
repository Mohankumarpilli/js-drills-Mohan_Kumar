//    Write a function that accesses and prints the names and email addresses of individuals aged 25.
const data = require('./Data')
function name_emails(data){
    let details = [];
    data.forEach(element => {
        let persons = {
            "name" : element.name,
            "enail" : element.email
        };
        details.push(persons);
    });
    return details;
}

module.exports = name_emails;