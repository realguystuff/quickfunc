module.exports = (value) => {
    if (value % 2 === 1) {
        return 'odd';
    } else if (value % 2 === 0) {
        return 'even';
    } else {
        throw new Error("Using the 'oddEven' function requires a number.");
    }
}