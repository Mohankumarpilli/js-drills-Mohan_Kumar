// Q3 Find all users with masters Degree.

function person_masters(data){
    if(typeof(data) != 'object'){
        throw new Error('dataset is not correct');
    }

    let res = [];

    for(let index in data){

        if((typeof data[index] != 'object') || typeof data[index].qualification != 'string'){
            throw new Error("Give correct data set");
        }

        if(data[index].qualification === 'Masters'){
            res.push(index);
        }
    }

    return res;
}

module.exports = person_masters;