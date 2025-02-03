//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
function specific_age(data,age){
    let person_age = [];
    data.forEach(element => {
        if(element.age == age){
            person_age.push(element);
        }
    });
    return person_age;
}

module.exports = specific_age;