function complexFunction(arg1, arg2) {
    return arg1 + arg2;
}

function cache(func) {
    let cacheObj = {};

    return function () {
        let key = [].slice.call(arguments).join('');
        if (cacheObj[key]) {
            const result = `will not be executed: ${cacheObj[key]}`;
            delete cacheObj[key];
            return result;
        } else {
            cacheObj[key] = func.apply(this, arguments)
            return `will be fulfilled: ${cacheObj[key]}`
        }
    }
}

let cachedFunc = cache(complexFunction);


module.exports = { cache };