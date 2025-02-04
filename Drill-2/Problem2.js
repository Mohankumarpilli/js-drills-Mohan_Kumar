// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
// "Last car is a *car make goes here* *car model goes here*"

const data = require('./Data')

function last_car(data){
    if(!Array.isArray(data)){
        throw new Error("give correct dataset");
    }

    if(data.length==0){
        throw new Error("give dataset is emtpy");
    }

    if(!data[data.length-1].car_year){
        throw new Error("give correct dataset");
    }

    let last = null;
    last = data[data.length-1];
    return last;
}

let last = last_car(data);

function latest_car(data){
    if(!Array.isArray(data)){
        throw new Error("give correct dataset");
    }

    if(data.length==0){
        throw new Error("give dataset is emtpy");
    }

    if(!data[data.length-1].car_year){
        throw new Error("give correct dataset");
    }
    
    let latest = data[0];
    for(let i = 1; i < data.length; i++){
        if(data[i].car_year > latest.car_year){
            latest = data[i];
        }
    }
    return latest;
}

module.exports = {last_car,latest_car};