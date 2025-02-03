// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

function older_cars(data){
    let older_car = [];
    for(let element = 0; element < data.length; element++){
        if(data[element].car_year<2000){
            older_car.push(data[element]);
        }
    };
    return older_car;   
}

module.exports = older_cars;