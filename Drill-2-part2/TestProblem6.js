const data = require('./Data');

const {interested_in,interested_in_usingfilter} = require('./Problem6')

console.log(JSON.stringify(interested_in_usingfilter(data)));

console.log(JSON.stringify(interested_in(data)));