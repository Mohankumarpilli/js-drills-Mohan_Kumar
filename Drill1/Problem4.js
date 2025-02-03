//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

function at_postion(data,id){
    if(id<data.length && id > 0){
        return data[id-1];
    }
    return null;
}

module.exports = at_postion;