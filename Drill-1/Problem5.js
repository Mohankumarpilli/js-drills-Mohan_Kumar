//    Implement a loop to access and print the ages of all individuals in the dataset.

function print_ages(data){
    if(!Array.isArray(data)){
        throw new Error("give correct dataset");
    }
    let ages = [];
    for(let index of data){
        if((typeof index != 'object') || typeof index.age != 'number'){
            throw new Error("Give correct data set");
        }
        ages.push(index.age);
    }
    return ages;
}

module.exports = print_ages;