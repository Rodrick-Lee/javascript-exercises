function getAge(person) {
    if (!person.yearOfDeath) {
        person.yearOfDeath = new Date().getFullYear()
    }
    return person.yearOfDeath - person.yearOfBirth
}

const findTheOldest = function (array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest)
        const currentAge = getAge(currentPerson)
        return currentAge > oldestAge ? currentPerson : oldest
    })
};

// Do not edit below this line
module.exports = findTheOldest;
