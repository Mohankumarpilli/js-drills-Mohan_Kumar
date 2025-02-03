// Q2 Find all users staying in Germany.

const data = require('./Data');

function person_in_germany(data){
    if(typeof(data) != 'object'){
        throw new Error('dataset is not correct');
    }

    let res = [];

    for(let index in data){

        if((typeof data[index] != 'object') || typeof data[index].nationality != 'string'){
            throw new Error("Give correct data set");
        }

        if(data[index].nationality === 'Germany'){
            res.push(index);
        }
    }

    return res;
}

module.exports = person_in_germany;