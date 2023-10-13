function myEach(collection, callback) {
    for (let item in collection) {
        callback(collection[item]);
    }
    return collection;
}

function myMap(collection, callback) {
    let result = [];
    for (let item in collection) {
        result.push(callback(collection[item]));
    }
    return result;
}

function myReduce(collection, callback, initial) {
    let result = initial !== undefined ? initial : Object.values(collection)[0];
    let i = initial !== undefined ? 0 : 1;

    let values = Array.isArray(collection) ? collection : Object.values(collection);

    for (; i < values.length; i++) {
        result = callback(result, values[i]);
    }
    return result;
}

function myFind(collection, predicate) {
    for (let item in collection) {
        if (predicate(collection[item])) {
            return collection[item];
        }
    }
}

function myFilter(collection, predicate) {
    let result = [];
    for (let item in collection) {
        if (predicate(collection[item])) {
            result.push(collection[item]);
        }
    }
    return result;
}

function mySize(collection) {
    return Object.keys(collection).length;
}

function myFirst(array, n=1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n=1) {
    return n === 1 ? array[array.length - 1] : array.slice(array.length - n);
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}