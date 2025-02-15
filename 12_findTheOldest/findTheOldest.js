const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return oldestAge > currentAge ? oldest : current;
    });
};

const getAge = function (born, death) {
    if (!death) {
        death = new Date().getFullYear();
    }

    return death - born;
};

// Do not edit below this line
module.exports = findTheOldest;
