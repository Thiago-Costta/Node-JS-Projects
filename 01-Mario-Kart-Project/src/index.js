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

async function getRandomArm(){
    return Math.floor(Math.random() * 2);
}

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

async function playRaceEngine(character1, character2){
    for(let i = 0; i < 5; i++){
        console.log(`🏁 Round ${i+1}`);

        //Random Blocks
        let block = await getRandomBlock();
        console.log(`Block: ${block}`);
        
        //Roll Dices
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        // Test Skills
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if(block === "STRAIGHT"){
            totalTestSkill1 = diceResult1 + character1.SPEED;
            totalTestSkill2 = diceResult2 + character2.SPEED;

            await logRollResult(
                character1.NAME,
                "speed",
                diceResult1,
                character1.SPEED
            );
            await logRollResult(
                character2.NAME,
                "speed",
                diceResult2,
                character2.SPEED
            );
        };
        if(block === "CURVE"){
            totalTestSkill1 = diceResult1 + character1.HANDLING;
            totalTestSkill2 = diceResult2 + character2.HANDLING;

            await logRollResult(
                character1.NAME,
                "handling",
                diceResult1,
                character1.HANDLING
            );
            await logRollResult(
                character2.NAME,
                "handling",
                diceResult2,
                character2.HANDLING
            );
        };
        if(block === "BATTLE"){
            powerResult1 = diceResult1 + character1.POWER;
            powerResult2 = diceResult2 + character2.POWER;

            console.log(`${character1.NAME} confronted ${character2.NAME}! 🥊`);

            await logRollResult(
                character1.NAME,
                "power",
                diceResult1,
                character1.POWER
            );
            await logRollResult(
                character2.NAME,
                "power",
                diceResult2,
                character2.POWER
            );
            
            if(powerResult1 > powerResult2 && character2.POINTS > 0){
                console.log(`${character1.NAME} won the battle! ${character2.NAME} lost 1 point 🐢`);
                character2.POINTS--;  
            };
            
            if(powerResult2 > powerResult1 && character1.POINTS > 0){
                console.log(`${character2.NAME} won the battle! ${character1.NAME} lost 1 point 🐢`);
                character1.POINTS--;  
            };
            
            console.log(powerResult2 === powerResult1 ? "Tie in the battle! No points lost" : "");

        };

        //Checking the winner
        if(totalTestSkill1 > totalTestSkill2){
            console.log(`${character1.NAME} scored a point!`);
            character1.POINTS++;
        } else if(totalTestSkill2 > totalTestSkill1){
            console.log(`${character2.NAME} scored a point!`);
            character2.POINTS++;
        };

        console.log("-------------------------------------------");
    };


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

})(); // Immediately Invoked Function Expression (IIFE)