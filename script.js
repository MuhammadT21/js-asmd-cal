document.getElementById("btn1").addEventListener("click", addition);

function addition() {
  // Input
  let addition1 = document.getElementById("Addition1").value;
  let addition2 = document.getElementById("Addition2").value;

  let num1 = Number(addition1);
  let num2 = Number(addition2);
  // Process
  var formula1 = num1 + num2;

  document.getElementById("Addition1").value = "";
  document.getElementById("Addition2").value = "";
  // Output
  document.getElementById("output1").innerHTML = formula1;
}

document.getElementById("btn2").addEventListener("click", subtraction);

function subtraction() {
  // Input
  let subtraction1 = document.getElementById("Subtraction1").value;
  let subtraction2 = document.getElementById("Subtraction2").value;

  let num3 = Number(subtraction1);
  let num4 = Number(subtraction2);

  var formula2 = num3 - num4;

  document.getElementById("Subtraction1").value = "";
  document.getElementById("Subtraction2").value = "";
  // Output
  document.getElementById("output2").innerHTML = formula2;
}

document.getElementById("btn3").addEventListener("click", multiplication);

function multiplication() {
  // Input
  var multiplication1 = document.getElementById("Multiplication1").value;
  var multiplication2 = document.getElementById("Multiplication2").value;

  var num5 = Number(multiplication1);
  var num6 = Number(multiplication2);
  // Process
  var formula3 = num5 * num6;

  document.getElementById("Multiplication1").value = "";
  document.getElementById("Multiplication2").value = "";
  // Output
  document.getElementById("output3").innerHTML = formula3;
}

document.getElementById("btn4").addEventListener("click", division);

function division() {
  // Input
  var division1 = document.getElementById("Division1").value;
  var division2 = document.getElementById("Division2").value;

  var num7 = Number(division1);
  var num8 = Number(division2);

  document.getElementById("Division1").value = "";
  document.getElementById("Division2").value = "";

  // Process
  var formula4 = num7 / num8;

  // Output
  document.getElementById("output4").innerHTML = formula4;
}

document.getElementById("clear1").addEventListener("click", clear11);

function clear11() {
  document.getElementById("output1").innerHTML = "---";
}
