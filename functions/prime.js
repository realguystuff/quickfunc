module.exports = (value) => {
    if (typeof value !== 'number') {
        throw new Error("Using the 'prime' function requires a number.");
    } else {
        if (value % 2 !== 0) {
            if (value % 3 !== 0) {
                if (value % 5 !== 0) {
                    if (value % 7 !== 0) {
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