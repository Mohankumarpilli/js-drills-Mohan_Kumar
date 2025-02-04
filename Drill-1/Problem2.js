//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

function print_hobbies(data){
    
    if(!Array.isArray(data)){
        throw new Error("give correct dataset");
    }

    let hobby = [];
    for(let index of data){
        if((typeof index != 'object') || typeof index.age != 'number'){
            throw new Error("Give correct data set");
        }
        if(index.age==30){
            hobby.push(index.hobbies);
        }
    }
    return hobby;
}

module.exports = print_hobbies;