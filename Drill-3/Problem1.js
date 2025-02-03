// Q1 Find all users who are interested in playing video games.

function playes_games(data){
    if(typeof(data) != 'object'){
        throw new Error('dataset is not correct');
    }

    let res = [];
    let task = "Video Games";


    for(let index in data){

        if((typeof data[index] != 'object') || typeof data[index].interests[0] != 'string'){
            throw new Error("Give correct data set");
        }
        let details = data[index];
        let hobby = details.interests;
        if(data[index]['interests'].includes('Video Games')){
            console.log(index);
        }
        for(let ele of hobby){
            if(ele.includes(task)){
                res.push(index);
                break;
            }
        }
    }

    return res;
}


module.exports = playes_games;