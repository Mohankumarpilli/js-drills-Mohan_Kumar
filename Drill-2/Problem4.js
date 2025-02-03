// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

function reterive_years(data){
    let years = [];
    data.forEach(element => {
        years.push(element.car_year);
    });
    return years;
}

module.exports = reterive_years;