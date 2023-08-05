let x = Math.random() * 3
let result;
let actualx = Math.trunc(x)
let input;

let computerChoice;
if (actualx == 0) {
  computerChoice = "rock"
}
if (actualx == 1) {
  computerChoice = "paper"
}
if (actualx == 2) {
  computerChoice = "scissor"
}

let a = function(event) {
  input = "rock";
  document.getElementById("paper_id").removeEventListener('click', b)
  document.getElementById("scissor_id").removeEventListener('click', c)
  decision();
}
let b = function() {
  input = "paper";

  document.getElementById("rock_id").removeEventListener('click', a)

  document.getElementById("scissor_id").removeEventListener('click', c)

  decision();
}
let c = function() {
  input = "scissor";

  document.getElementById("rock_id").removeEventListener('click', a)

  document.getElementById("paper_id").removeEventListener('click', b)

  decision(); 
}

document.getElementById("rock_id").addEventListener('click', a)
document.getElementById("paper_id").addEventListener('click', b)
document.getElementById("scissor_id").addEventListener('click', c)

/*document.getElementById("rock_id").onclick = function(){
  input = "rock";
  decision();
}
document.getElementById("paper_id").onclick = function(){
  input = "paper";
  decision();
}
document.getElementById("scissor_id").onclick = function(){
  input = "scissor";
  decision();
} */
//let input = prompt("enter rock paper or scissor");

function decision() {

  if (computerChoice == "rock") {
    if (input == "paper") {
      result = "win";
    }
    if (input == "scissor") {
      result = "lose";
    }
    else if (input == "rock") {
      result = "tie";
    }
  }

  if (computerChoice == "paper") {
    if (input == "scissor") {
      result = "win"

    }
    if (input == "rock") {
      result = "lose";
    }
    else if (input == "paper") {
      result = "tie";
    }
  }

  if (computerChoice == "scissor") {
    if (input == "rock") {
      result = "win";
    }
    if (input == "paper") {
      result = "lose";
    }
    else if (input == "scissor") {
      result = "tie";
    }
  }

  let announce = "computer choice is " + computerChoice + " and your choice is " + input + " so you " + result;

  document.getElementById("ans").innerText = announce;
}




