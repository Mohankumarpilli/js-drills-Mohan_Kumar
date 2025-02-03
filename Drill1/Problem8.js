//    Implement a loop to access and log the city and country of each individual in the dataset.

function person_city(data){
    const address = [];
    data.forEach(element => {
        let details = {
            "city" : element.city,
            "country" : element.country
        }
        address.push(details);
    });

    return address;
}

module.exports = person_city;