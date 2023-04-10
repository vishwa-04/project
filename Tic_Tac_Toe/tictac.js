var flag = 1;
function winner() {
  let vishva_a1 = document.getElementById("a11").innerText;  //getting id of all the td to access each id
  let vishva_a2 = document.getElementById("a22").innerText;
  let vishva_a3 = document.getElementById("a33").innerText;
  let vishva_a4 = document.getElementById("a44").innerText;
  let vishva_a5 = document.getElementById("a55").innerText;
  let vishva_a6 = document.getElementById("a66").innerText;
  let vishva_a7 = document.getElementById("a77").innerText;
  let vishva_a8 = document.getElementById("a88").innerText;
  let vishva_a9 = document.getElementById("a99").innerText;

  if ((vishva_a1 == "X" && vishva_a2 == "X" && vishva_a3 == "X") || (vishva_a4 == "X" && vishva_a5 == "X" && vishva_a6 == "X") || (vishva_a7 == "X" && vishva_a8 == "X" && vishva_a9 == "X") || (vishva_a1 == "X" && vishva_a4 == "X" && vishva_a7 == "X") || (vishva_a2 == "X" && vishva_a5 == "X" && vishva_a8 == "X") || (vishva_a3 == "X" && vishva_a6 == "X" && vishva_a9 == "X") || (vishva_a3 == "X" && vishva_a5 == "X" && vishva_a7 == "X") || (vishva_a1 == "X" && vishva_a5 == "X" && vishva_a9 == "X")) {
    alert("X is winner");
    location.reload();
  }//if condition to check if x is the winner

  else if ((vishva_a1 == "O" && vishva_a2 == "O" && vishva_a3 == "O") || (vishva_a4 == "O" && vishva_a5 == "O" && vishva_a6 == "O") || (vishva_a7 == "O" && vishva_a8 == "O" && vishva_a9 == "O") || (vishva_a1 == "O" && vishva_a4 == "O" && vishva_a7 == "O") || (vishva_a2 == "O" && vishva_a5 == "O" && vishva_a8 == "O") || (vishva_a3 == "O" && vishva_a6 == "O" && vishva_a9 == "O") || (vishva_a3 == "O" && vishva_a5 == "O" && vishva_a7 == "O") || (vishva_a1 == "O" && vishva_a5 == "O" && vishva_a9 == "O")) {
    alert("O is a winner");
    location.reload();
  }//else if condition to check if 0 is the winner
  else if ((vishva_a1 == "X" || vishva_a1 == "O") && (vishva_a2 == "X" || vishva_a2 == "O") && (vishva_a3 == "X" || vishva_a3 == "O") && (vishva_a4 == "X" || vishva_a4 == "O") && (vishva_a5 == "X" || vishva_a5 == "O") && (vishva_a6 == "X" || vishva_a6 == "O") && (vishva_a7 == "X" || vishva_a7 == "O") && (vishva_a8 == "X" || vishva_a8 == "O") && (vishva_a9 == "X" || vishva_a9 == "O")) {
    alert("Match is tie");
    location.reload();

  }// else if condition to check if match is tie
}


function click1() {
  if (flag == 1) {
    document.getElementById("a11").innerText = "X";
    document.getElementById("a11").classList.add("disabled");
    winner();
    turn1();
    turn2();

    flag = 0;
  }
  else {

    document.getElementById("a11").innerText = "O";
    document.getElementById("a11").classList.add("disabled");

    winner();
    turn3();
    turn4();  
    flag = 1;
  }

}
function click2() {
  if (flag == 1) {
    // document.getElementById("vishva_x").style.color = "blue";
    document.getElementById("a22").innerText = "X";
    document.getElementById("a22").classList.add("disabled");
    winner();
    turn1();
    turn2();
    flag = 0;
  }
  else {
    // document.getElementById("vishva_x").style.color = "blue";
    document.getElementById("a22").innerText = "O";
    document.getElementById("a22").classList.add("disabled");
    winner();
    turn3();
    turn4();  
   
    flag = 1;
  }

}
function click3() {
  if (flag == 1) {
    // document.getElementById("vishva_x").style.color = "blue";

    document.getElementById("a33").innerText = "X";
    document.getElementById("a33").classList.add("disabled");
    winner();
    turn1();
    turn2();
    flag = 0;
  }
  else {
    // document.getElementById("vishva_x").style.color = "blue";

    document.getElementById("a33").innerText = "O";
    document.getElementById("a33").classList.add("disabled");
    winner();
    turn3();
    turn4();  
    flag = 1;
  }

}
function click4() {
  if (flag == 1) {
    // document.getElementById("vishva_x").style.color = "blue";

    document.getElementById("a44").innerText = "X";
    document.getElementById("a44").classList.add("disabled");
    winner();
    turn1();
    turn2();
    flag = 0;
  }
  else {
    // document.getElementById("vishva_x").style.color = "blue";

    document.getElementById("a44").innerText = "O";
    document.getElementById("a44").classList.add("disabled");
    winner();
    turn3();
    turn4();  
    flag = 1;
  }

}
function click5() {
  if (flag == 1) {
    // document.getElementById("vishva_x").style.color = "blue";

    document.getElementById("a55").innerText = "X";
    document.getElementById("a55").classList.add("disabled");
    winner();
    turn1();
    turn2();
    flag = 0;
  }
  else {
    // document.getElementById("vishva_x").style.color = "blue";

    document.getElementById("a55").innerText = "O";
    document.getElementById("a55").classList.add("disabled");
    winner();
    turn3();
    turn4();  
    flag = 1;
  }

}
function click6() {
  if (flag == 1) {
    // document.getElementById("vishva_x").style.color = "blue";

    document.getElementById("a66").innerText = "X";
    document.getElementById("a66").classList.add("disabled");
    winner();
    turn1();
    turn2();
    flag = 0;
  }
  else {
    // document.getElementById("vishva_x").style.color = "blue";

    document.getElementById("a66").innerText = "O";
    document.getElementById("a66").classList.add("disabled");
    winner();
    turn3();
    turn4();  
    flag = 1;
  }

}
function click7() {
  if (flag == 1) {
    // document.getElementById("vishva_x").style.color = "blue";

    document.getElementById("a77").innerText = "X";
    document.getElementById("a77").classList.add("disabled");
    winner();
    turn1();
    turn2();
    flag = 0;
  }
  else {
    // document.getElementById("vishva_x").style.color = "blue";

    document.getElementById("a77").innerText = "O";
    document.getElementById("a77").classList.add("disabled");
    winner();
    turn3();
    turn4();  
    flag = 1;
  }

}
function click8() {
  if (flag == 1) {
    // document.getElementById("vishva_x").style.color = "blue";

    document.getElementById("a88").innerText = "X";
    document.getElementById("a88").classList.add("disabled");
    winner();
    turn1();
    turn2();
    flag = 0;
  }
  else {
    // document.getElementById("vishva_x").style.color = "blue";

    document.getElementById("a88").innerText = "O";
    document.getElementById("a88").classList.add("disabled");
    winner();
    turn3();
    turn4();  
    flag = 1;
  }

}
function click9() {
  if (flag == 1) {
    // document.getElementById("vishva_x").style.color = "blue";

    document.getElementById("a99").innerText = "X";
    document.getElementById("a99").classList.add("disabled");
    winner();
    turn1();
    turn2();
    flag = 0;
  }
  else {
    // document.getElementById("vishva_x").style.color = "blue";

    document.getElementById("a99").innerText = "O";
    document.getElementById("a99").classList.add("disabled");
    winner();
    turn3();
    turn4();  
    flag = 1;
  }

}
function turn1() {
  document.getElementById("vishva_x").style.color = "black";

}
function turn2() {
  document.getElementById("vishva_o").style.color = "red";
}
function turn3(){
  document.getElementById("vishva_x").style.color = "red";
}
function turn4(){
  document.getElementById("vishva_o").style.color = "black";
}
function reset(){
  if(confirm("Are you sure ?")==true)
  location.reload();
}