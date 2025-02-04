//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.


function at_index(data,id){

    if(!Array.isArray(data)){
        throw new Error("give correct dataset");
    }
    if(id < 0 || id > data.length){
        throw new Error("Give correct id");
    }
    if((typeof data[id-1] != 'object') || typeof data[id-1].name != 'string' || typeof data[id-1].city != 'string'){
        throw new Error("Give correct data set");
    }
    let details = data[id-1];
    return details;
}

module.exports = at_index;