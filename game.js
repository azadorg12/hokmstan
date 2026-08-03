let teamScore = 0;
let enemyScore = 0;

function startGame() {

    document.querySelector(".subtitle").innerHTML =
    "🦅 سیمرغ آماده شروع مسابقه است";

    document.getElementById("game").classList.remove("hidden");

}


function playRound(){

    let winner = Math.floor(Math.random() * 2);


    if(winner === 0){

        teamScore++;

        document.getElementById("teamScore").innerHTML =
        teamScore;

    } else {

        enemyScore++;

        document.getElementById("enemyScore").innerHTML =
        enemyScore;

    }


    if(teamScore === 7){

        alert("🎉 تیم شما برنده شد!");

        resetGame();

    }


    if(enemyScore === 7){

        alert("😔 تیم حریف برنده شد!");

        resetGame();

    }

}



function resetGame(){

    teamScore = 0;
    enemyScore = 0;

    document.getElementById("teamScore").innerHTML = 0;
    document.getElementById("enemyScore").innerHTML = 0;

}
