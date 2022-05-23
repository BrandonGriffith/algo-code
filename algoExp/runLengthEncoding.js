function runLengthEncoding(string) {
    let arr = [];
    let runner = 1;
    for (let i = 1; i < string.length + 1; i++) {
        if (string[i] != string[i - 1] || runner == 9) {
            arr.push(runner.toString());
            arr.push(string[i - 1]);
            runner = 0;
        }
        runner++;
    }
    return arr.join('');
}
// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;