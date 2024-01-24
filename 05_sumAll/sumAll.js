const sumAll = function(min, max) {

    if (typeof min !== "number" || typeof max !== "number" ) {
        return "ERROR";
    }

    if (min < 0 || max < 0) {
        return "ERROR";
    }

    if (min < max) {
        return ((max-min)+1) * (min + max)/2;
    } else if (min > max) {
        return ((min-max)+1) * (max + min)/2;
    }
};

// Do not edit below this line
module.exports = sumAll;
