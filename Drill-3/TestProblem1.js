const data = require('./Data');

const playes_games = require('./Problem1');

try{
    console.log(playes_games(data));
}catch(error){
    console.log(error.message);
}