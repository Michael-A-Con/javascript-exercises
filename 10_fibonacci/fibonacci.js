const fibonacci = function(n) {
        if (typeof n !== 'number') {
            count = parseInt(n);
        } else {
            count = n;
        }
    
        if (count < 0) {
            return "OOPS";
        }

        if (count === 0) {
            return 0;
        }

        let first = 1;
        let second = 0;

        for (let i = 2; i <= count; i++) {
            let current = first + second;
            second = first;
            first = current;
        }

        return first;

};

// Do not edit below this line
module.exports = fibonacci;