// Function displaying highscores 
function displayHighScores() {
    var scoreContainer = document.getElementById('scoreStorageEl')
    const scores = JSON.parse(localStorage.getItem("highScores"));

    for(let i =0; i<scores.length; i++){

        var scoreEl = document.createElement('li');
        scoreEl.textContent = scores[i].name + ' - ' + scores[i].score
        scoreContainer.append(scoreEl)
    }
}

displayHighScores();