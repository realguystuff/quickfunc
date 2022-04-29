module.exports = (array, object) => {
    if (Array.isArray(array)) {
        object = null || object;
        const index = Math.floor(Math.random() * array.length);
        if (object !== null) {
            return array[index].object;
        } else if (typeof object === 'object') {
            return array[index];
        } else {
            throw new Error("Using the 'randomArray' function with a second argument requires an object");
        }
    } else {
        throw new Error("Using the 'randomArray' function requires an array.");
    }
}