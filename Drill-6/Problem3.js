function cacheFunction(cb) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        
        if (key in cache) {
            return {'where' : 'cache','result' : cache[key]};
        }

        const result = cb(...args); 
        cache[key] = result;
        return {'where' : 'direct','result' : result};
    };
}

const slowFunction = (num) => {
    return num * 2;
};

const res = cacheFunction(slowFunction);

console.log(res(5));
console.log(res(5));
console.log(res(1));
console.log(res(1));
