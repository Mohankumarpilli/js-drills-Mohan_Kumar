// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
// "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"

function Car_details(details, id) {
    for(let i = 0; i < details.length; i++){
        if(details[i].id == id){
            return details[i];
        }
    }
    return null;
}

module.exports = Car_details; 