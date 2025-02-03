//    Write a function that accesses and prints the names and email addresses of individuals aged 25.

function aged_at(data,input){
    if(!Array.isArray(data)){
        throw new Error("give correct dataset");
    }

    let person_details = [];
    for(let index of data){
        if((typeof index != 'object') || typeof index.age != 'number' || typeof index.name != 'string' || typeof index.email != 'string'){
            throw new Error("Give correct data set");
        }

        if(index.age == input){
            person_details.push({name:index.name,email:index.email});
        }
    }
    return person_details;
}

module.exports  = aged_at;