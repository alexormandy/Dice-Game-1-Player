let totalscores = 0 

function diceNum() {
let dice = Math.floor(Math.random() *6)+1;
document.getElementById("dicedisplay").innerHTML = dice;
totalscores = +totalscores + +dice
document.getElementById("totalscore").innerHTML = totalscores;

if (dice == 1){
    totalscores= 0
    document.getElementById("dicepicture").src='/dicegame/img/dice1.png';

}

if (dice == 2){
    document.getElementById("dicepicture").src='/dicegame/img/dice2.png';
}

if (dice == 3){
    document.getElementById("dicepicture").src='/dicegame/img/dice3.png';
}

if (dice == 4){
    document.getElementById("dicepicture").src='/dicegame/img/dice4.png';
}

if (dice == 5){
    document.getElementById("dicepicture").src='/dicegame/img/dice5.png';
}

if (dice == 6){
    document.getElementById("dicepicture").src='/dicegame/img/dice6.png';
}

else if(totalscores >= 21) {
    document.getElementById("win").innerHTML = "You win!"
    totalscores = 0
    
}

else {
document.getElementById("win").innerHTML = ""

}}
