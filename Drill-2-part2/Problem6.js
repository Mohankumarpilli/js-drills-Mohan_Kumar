// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

function interested_in(data){
    let cars = [];
    data.forEach(element => {
        if(element.car_make == 'Audi' || element.car_make == 'BMW'){
            cars.push(JSON.stringify(element));
        }
    });
    return cars;
}

function interested_in_usingfilter(data){
    let cars = [];
    data.filter( element => {
        if(element.car_make == 'Audi' || element.car_make == 'BMW'){
            cars.push(JSON.stringify(element));
        }
    })
    return cars;
}

module.exports = {interested_in, interested_in_usingfilter};