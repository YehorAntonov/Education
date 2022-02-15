function tickets(person) {

    if (!Array.isArray(person)) {
        return false;
    }
    for (let i = 0; i < person.length; i++) {
        if (typeof(person[i]) === 'string') {
            person[i] = parseInt(person[i]);
        }
    }

    let m25 = 0;
    let m50 = 0;
    for (let i = 0; i < person.length; i++) {
        if (person[i] === 25) {
            m25++;
        } else if (person[i] === 50) {
            m50++;
            m25--;
        } else if (person[i] === 100) {
            m25--;
            if (m50 > 0) {
                m50--;
            }
            else {
                m25 = m25 - 2;
            }
        }

    }

    if (m50 < 0 || m25 < 0) {
        return 'NO';
    }
    return 'YES';

}

module.exports = { tickets };