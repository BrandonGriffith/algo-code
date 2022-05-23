function caesarCipherEncryptor(string, key) {
    const arr = [];
    key = key % 26;
    for (let i of string) {
        let code = i.charCodeAt() + key;
        if (code <= 122) i = String.fromCharCode(code);
        else i = String.fromCharCode(96 + (code % 122));
        arr.push(i);
    }
    return arr.join('');
}
// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;