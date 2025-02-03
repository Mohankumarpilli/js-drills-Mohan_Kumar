//    Create a function to retrieve and display the first hobby of each individual in the dataset.

function display_first_hobbies(data){
    if(!Array.isArray(data)){
        throw new Error("give correct dataset");
    }

    let hobby = [];
    for(let index of data){
        if((typeof index != 'object') || typeof index.hobbies[0] != 'string'){
            throw new Error("Give correct data set");
        }
        hobby.push(index.hobbies[0]);
    }
    return hobby;
}

module.exports  = display_first_hobbies;