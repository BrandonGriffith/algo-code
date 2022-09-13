function isPalindrome(string) {
    for (let i = 0; i < Math.floor(string.length / 2); i++)
        if (string[i] != string[string.length - i - 1]) return false;
    return true;
}
// Do not edit the line below.
exports.isPalindrome = isPalindrome;



function isPalindrome(string) {
    let rs = "";
    for (let i of string)
        rs = i + rs;
    return rs == string;
}
// Do not edit the line below.
exports.isPalindrome = isPalindrome;



function isPalindrome(string) {
    let idx = 0;
    const helper = (string, i) => {
        let j = string.length - i - 1;
        if (i >= j) return true;
        if (string[i] != string[j]) return false;
        return helper(string, i + 1);
    }
    return helper(string, idx);
}
// Do not edit the line below.
exports.isPalindrome = isPalindrome;