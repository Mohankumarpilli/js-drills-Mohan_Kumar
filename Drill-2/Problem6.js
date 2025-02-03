// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

function interested_in(data){
    let cars = [];
    for(let i = 0; i < data.length; i++){
        if(data[i].car_make == 'Audi' || data[i].car_make == 'BMW'){
            cars.push(JSON.stringify(data[i]));
        }
    };
    return cars;
}

module.exports = {interested_in};