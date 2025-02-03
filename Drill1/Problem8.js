//    Implement a loop to access and log the city and country of each individual in the dataset.

function print_city(data){
    if(!Array.isArray(data)){
        throw new Error("give correct dataset");
    }

    for(let index of data){
        if((typeof index != 'object') || typeof index.city != 'string' || typeof index.name != 'string' || typeof index.country != 'string'){
            throw new Error("Give correct data set");
        }
        console.log(`name is ${index.name} lives in ${index.city} ${index.country}`);
    }
}

module.exports = print_city;