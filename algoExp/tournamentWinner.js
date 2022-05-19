function tournamentWinner(competitions, results) {
    let scores = {
        "topTeam": 0
    }
    let bestTeam = "";
    let idx = 0;
    let winner = "";
    for (let i of competitions) {
        let score = results[idx];
        if (score == 0) {
            winner = i[1]
        };
        if (score == 1) {
            winner = i[0]
        };
        if (scores[winner]) scores[winner] += 1;
        if (!scores[winner]) scores[winner] = 1;
        if (scores[winner] > scores.topTeam) {
            scores.topTeam = scores[winner];
            bestTeam = winner;
        }
        idx++;
    }
    return bestTeam;
}