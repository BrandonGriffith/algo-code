function runLengthEncoding(string) {
    let encode = [];
    let runner = 1;
    for (let i = 1; i <= string.length; i++) {
        if (string[i] != string[i - 1] || runner == 9) {
            encode.push(runner.toString());
            encode.push(string[i - 1]);
            runner = 0;
        }
        runner++;
    }
    return encode.join('');
}
// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"));