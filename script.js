let totalscores = 0;

function diceNum() {
  let dice = Math.floor(Math.random() * 6);

  totalscores = totalscores + dice;
  document.getElementById("totalscore").innerHTML = totalscores;
  document.getElementById("dicedisplay").innerHTML = `You rolled ${dice}`;

  if (dice == 1) {
    totalscores = 0;
    document.getElementById("dicepicture").src = "./img/dice1.jpg";
  }

  if (dice == 2) {
    document.getElementById("dicepicture").src = "./img/dice2.jpg";
  }

  if (dice == 3) {
    document.getElementById("dicepicture").src = "./img/dice3.jpg";
  }

  if (dice == 4) {
    document.getElementById("dicepicture").src = "./img/dice4.jpg";
  }

  if (dice == 5) {
    document.getElementById("dicepicture").src = "./img/dice5.jpg";
  }
  if (dice == 0) {
    diceNum();
  }
  if (dice == 6) {
    document.getElementById("dicepicture").src = "./img/dice6.jpg";
  } else if (totalscores >= 21) {
    document.getElementById("win").innerHTML = "You win!";
    totalscores = 0;
  } else {
    document.getElementById("win").innerHTML = "";
  }
}
