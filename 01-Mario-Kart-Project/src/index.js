const player1 = {
    NAME: "Mario",
    SPEED: 4,
    HANDLING: 3,
    POWER: 3,
    POINTS: 0,
};

const player2 = {
    NAME: "luigi",
    SPEED: 3,
    HANDLING: 4,
    POWER: 4,
    POINTS: 0,
};

async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
};

async function getRandomBlock(){
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33: 
            result = "STRAIGHT";
            break;
        case random < 0.66:
            result = "CURVE";
            break;
        default:
            result = "BATTLE";
    };
    return result;
};

async function logRollResult(characterName, block, diceResult, attribute){
    console.log(`${characterName} 🎲 rolled a ${block} dice ${diceResult} + ${attribute} = ${diceResult + attribute}`);
};

// Random battle penalty (shell or bomb)
function getBattlePenalty(){
    return Math.random() < 0.5 ? { type: "Shell", points: -1 } : { type: "Bomb", points: -2 };
}

// Turbo chance (chance of +1 point for the winner)
function tryGiveTurbo(){
    return Math.random() < 0.5; // 50% chance of turbo
}

async function playRaceEngine(character1, character2){
    for(let i = 0; i < 5; i++){
        console.log(`🏁 Round ${i+1}`);

        let block = await getRandomBlock();
        console.log(`Block: ${block}`);
        
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if(block === "STRAIGHT"){
            totalTestSkill1 = diceResult1 + character1.SPEED;
            totalTestSkill2 = diceResult2 + character2.SPEED;

            await logRollResult(character1.NAME, "speed", diceResult1, character1.SPEED);
            await logRollResult(character2.NAME, "speed", diceResult2, character2.SPEED);
        };

        if(block === "CURVE"){
            totalTestSkill1 = diceResult1 + character1.HANDLING;
            totalTestSkill2 = diceResult2 + character2.HANDLING;

            await logRollResult(character1.NAME, "handling", diceResult1, character1.HANDLING);
            await logRollResult(character2.NAME, "handling", diceResult2, character2.HANDLING);
        };

        if(block === "BATTLE"){
            let powerResult1 = diceResult1 + character1.POWER;
            let powerResult2 = diceResult2 + character2.POWER;

            console.log(`${character1.NAME} confronted ${character2.NAME}! 🥊`);

            await logRollResult(character1.NAME, "power", diceResult1, character1.POWER);
            await logRollResult(character2.NAME, "power", diceResult2, character2.POWER);

            if(powerResult1 > powerResult2){
                let penalty = getBattlePenalty();
                character2.POINTS += penalty.points;
                if (character2.POINTS < 0) character2.POINTS = 0;

                console.log(`${character1.NAME} won the battle! ${character2.NAME} hit by ${penalty.type} and lost ${Math.abs(penalty.points)} point(s) 💥`);

                if(tryGiveTurbo()){
                    character1.POINTS++;
                    console.log(`${character1.NAME} gained a turbo boost! ⚡ +1 point`);
                }

            } else if(powerResult2 > powerResult1){
                let penalty = getBattlePenalty();
                character1.POINTS += penalty.points;
                if (character1.POINTS < 0) character1.POINTS = 0;

                console.log(`${character2.NAME} won the battle! ${character1.NAME} hit by ${penalty.type} and lost ${Math.abs(penalty.points)} point(s) 💥`);

                if(tryGiveTurbo()){
                    character2.POINTS++;
                    console.log(`${character2.NAME} gained a turbo boost! ⚡ +1 point`);
                }

            } else {
                console.log("Tie in the battle! No points lost");
            }
        };

        if(totalTestSkill1 > totalTestSkill2){
            console.log(`${character1.NAME} scored a point!`);
            character1.POINTS++;
        } else if(totalTestSkill2 > totalTestSkill1){
            console.log(`${character2.NAME} scored a point!`);
            character2.POINTS++;
        }

        console.log("-------------------------------------------");
    }
};

async function declareWinner(character1, character2){
    console.log("Final Result:");
    console.log(`${character1.NAME}: ${character1.POINTS} point(s)`);
    console.log(`${character2.NAME}: ${character2.POINTS} point(s)`);

    if(character1.POINTS > character2.POINTS){
        console.log(`\n${character1.NAME} won the race! Congratulations! 🏆`);
    } else if(character2.POINTS > character1.POINTS){
        console.log(`\n${character2.NAME} won the race! Congratulations! 🏆`);
    } else console.log("The race ended in a tie");
};

(async function main(){
    console.log(
        `🏁🚨 Race between ${player1.NAME} and ${player2.NAME} starting...\n`
    );

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})();