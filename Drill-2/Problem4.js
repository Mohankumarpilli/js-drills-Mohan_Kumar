// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

function reterive_years(data){
    
    if(!Array.isArray(data)){
        throw new Error('dataset is not correct');
    }

    let years = [];

    for(let index = 0; index < data.length; index++){

        if((typeof data[index] != 'object') || typeof data[index].car_year != 'number'){
            throw new Error("Give correct data set");
        }

        years.push(data[index].car_year);

    }

    return years;
}

module.exports = reterive_years;