function generateDocument(characters, document) {
    let obj = {};
    for (let i of characters) {
        if (obj[i]) obj[i] += 1;
        else obj[i] = 1;
    }
    for (let i of document) {
        if (obj[i]) obj[i] -= 1;
        else return false;
    }
    return true;
}
// Do not edit the line below.
exports.generateDocument = generateDocument;