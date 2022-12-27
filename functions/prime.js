module.exports = (value) => {
    if (typeof value !== 'number') {
        throw new Error("Using the 'prime' function requires a number.");
    } else {
        // divisible by 2?
        if (value % 2 !== 0) {
            // divisible by 3?
            if (value % 3 !== 0) {
                // divisible by 5?
                if (value % 5 !== 0) {
                    // divisible by 7?
                    if (value % 7 !== 0) {
                        // if all no, it is prime
                        return true;
                    }
                    return 7;
                }
                return 5;
            }
            return 3;
        }
        return 2;
    }
}