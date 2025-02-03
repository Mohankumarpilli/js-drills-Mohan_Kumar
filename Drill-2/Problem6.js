// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

function interested_in(data){

    if(!Array.isArray(data)){
        throw new Error('dataset is not correct');
    }

    let cars = [];
    for(let index = 0; index < data.length; index++){

        if((typeof data[index] != 'object') || typeof data[index].car_make != 'string'){
            throw new Error("Give correct data set");
        }

        if(data[index].car_make == 'Audi' || data[index].car_make == 'BMW'){
            cars.push(JSON.stringify(data[index]));
        }
    };
    return cars;
}

module.exports = {interested_in};