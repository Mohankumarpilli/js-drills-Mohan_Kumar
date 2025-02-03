//    Create a function to retrieve and display the first hobby of each individual in the dataset.

function first_hobbies(data){
    let hobby = [];

    data.forEach( ele => {
        hobby.push(ele.hobbies[0])
    })
    return hobby
}

module.exports = first_hobbies;