function firstNonRepeatingCharacter(string) {
    for (let i in string) {
        let flag = true;
        for (let j in string) {
            if (string[i] === string[j] && i != j) flag = false;
        }
        if (flag) return i;
    }
    return -1;
}
// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;



function firstNonRepeatingCharacter(string) {
    const obj = {};
    for (let i of string) {
        if (obj[i]) obj[i] += 1;
        else obj[i] = 1;
    }
    for (let i in string) {
        let char = string[i];
        if (obj[char] === 1) return i;
    }
    return -1;
}
// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;