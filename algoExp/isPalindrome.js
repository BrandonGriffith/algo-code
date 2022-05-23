function isPalindrome(string) {
    for (let i = 0; i < Math.floor(string.length / 2); i++) {
        if (string[i] != string[string.length - i - 1]) return false;
    }
    return true;
}
// Do not edit the line below.
exports.isPalindrome = isPalindrome;