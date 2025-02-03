//    Implement a loop to access and print the ages of all individuals in the dataset.

function print_ages(data){
    let ages = [];
    data.forEach(element => {
        ages.push(element.age);
    });
    return ages;
}

module.exports = print_ages;