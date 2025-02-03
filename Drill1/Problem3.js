//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
const data = require('./Data');
function isstudent_australia(data){
    let student = [];
    data.forEach(element => {
        if(element.isStudent && element.country == 'Australia'){
            student.push(element);
        }
    });
    return student;
}

module.exports = isstudent_australia;
