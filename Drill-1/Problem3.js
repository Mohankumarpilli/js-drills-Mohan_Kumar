//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

function students_details(data){
    let students = [];

    if(!Array.isArray(data)){
        throw new Error("give correct dataset");
    }

    for(let index of data){
        if((typeof index != 'object') || typeof index.isStudent != 'boolean' || typeof index.country != 'string'){
            throw new Error("Give correct data set");
        }
        if(index.isStudent && index.country == 'Australia'){
            students.push(index.name);
        }
    }
    return students;
}

module.exports = students_details;