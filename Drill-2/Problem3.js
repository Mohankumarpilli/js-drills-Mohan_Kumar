function sort_details(data) {

    if(!Array.isArray(data)){
        throw new Error('dataset is not correct');
    }

    data.sort((a, b) => {
        if (a.car_model.toLowerCase() > b.car_model.toLowerCase()) return 1;
        if (a.car_model.toLowerCase() < b.car_model.toLowerCase()) return -1;
        return 0;
    });

    let cars_names = [];
    for(let index = 0; index < data.length; index++){

        if((typeof data[index] != 'object') || typeof data[index].car_model != 'string'){
            throw new Error("Give correct data set");
        }

        cars_names.push(data[index].car_model);
    }
    return cars_names;
}

module.exports = sort_details;