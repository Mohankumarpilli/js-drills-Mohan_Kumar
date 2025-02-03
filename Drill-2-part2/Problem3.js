const data = require('./Data')

function sort_details(data) {
    data.sort((a, b) => {
        if (a.car_model.toLowerCase() > b.car_model.toLowerCase()) return 1;
        if (a.car_model.toLowerCase() < b.car_model.toLowerCase()) return -1;
        return 0;
    });
    return data;
}

module.exports = sort_details;