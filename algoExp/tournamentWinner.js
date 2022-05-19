function tournamentWinner(competitions, results) {
    let scores = {
        "topTeam": 0
    }
    let bestTeam = "";
    for (const [idx, team] of competitions.entries()) {
        let winner = "";
        let score = results[idx];
        if (score == 0) winner = team[1];
        if (score == 1) winner = team[0];
        if (scores[winner]) scores[winner] += 1;
        if (!scores[winner]) scores[winner] = 1;
        if (scores[winner] > scores.topTeam) {
            scores.topTeam = scores[winner];
            bestTeam = winner;
        }
    }
    return bestTeam;
}