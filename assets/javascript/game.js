var wins = 0;
var losses = 0;
var redCrystal = 0;
var blueCrystal = 0;
var yellowCrystal = 0;
var greenCrystal = 0;
var randNum = 0;
var currentScore = 0;
var gameEnd = true;

//Chooses a random number to be guessed
var randomNumber = function() {
    var number = Math.floor(Math.random() * 120) + 19;
    return number;
};

//Chooses a random number to assign to a crystal
var randomCrystal = function() {
    var crystal = Math.floor(Math.random() * 12) + 1;    
    return crystal;
};

//reset the game after
var reset = function(result) {
    redCrystal = randomCrystal();
    blueCrystal = randomCrystal();
    yellowCrystal = randomCrystal();
    greenCrystal = randomCrystal();
    randNum = randomNumber();
    currentScore = 0;
    $("#currentScore").text(currentScore);
    $("#randomNumber").text(randNum);
    if (result === 'w') {
        wins++;
        $("#wins").text("Wins: " + wins);
        $("#result").text("You Win!")

    } else if (result === 'l') {
        losses++;
        $("#losses").text("Losses: " + losses);
        $("#result").text("You Lose.")
    } else if (result === 'n') {
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
    }
};

$("#red").on("click", function() { 
    currentScore = redCrystal + currentScore;
    $("#currentScore").text(currentScore);
    if (currentScore === randNum) {
        reset('w');
    } else if (currentScore > randNum) {
        reset('l');
    }
});
$("#blue").on("click", function() { 
    currentScore = blueCrystal + currentScore;
    $("#currentScore").text(currentScore);
    if (currentScore === randNum) {
        reset('w');
    } else if (currentScore > randNum) {
        reset('l');
    }
});
$("#yellow").on("click", function() { 
    currentScore = yellowCrystal + currentScore;
    $("#currentScore").text(currentScore);
    if (currentScore === randNum) {
        reset('w');
    } else if (currentScore > randNum) {
        reset('l');
    }
});
$("#green").on("click", function() { 
    currentScore = greenCrystal + currentScore;
    $("#currentScore").text(currentScore);
    if (currentScore === randNum) {
        reset('w');
    } else if (currentScore > randNum) {
        reset('l');
    }
});

reset('n');