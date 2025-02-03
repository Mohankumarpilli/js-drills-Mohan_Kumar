// Q4 Group users based on their Programming language mentioned in their designation.

function program_language(data){
    if(typeof(data) != 'object'){
        throw new Error('dataset is not correct');
    }
    let res = {
        Python: [],
        JavaScript: [],
        Golang: []
    };

    for(let index in data){

        if((typeof data[index] != 'object') || typeof data[index].desgination != 'string'){
            throw new Error("Give correct data set");
        }

        if((data[index].desgination).includes('Python')){
            res.Python.push(index);
        }
        if((data[index].desgination).includes('Javascript')){
            res.JavaScript.push(index);
        }
        if((data[index].desgination).includes('Golang')){
            res.Golang.push(index);
        }
    }
    return res;
}

module.exports = program_language;