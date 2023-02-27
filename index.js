const toggler = document.getElementById("toggler-btn");
const circle = document.getElementById("toggler-circle");

toggler.addEventListener("click", () => {
  const root = document.querySelector(":root");

  let classList = circle.classList;
  if (!classList.contains("theme2")) {
    classList.add("theme2");
    setTheme("theme2");
  } else if (classList.contains("theme2") && !classList.contains("theme3")) {
    classList.add("theme3");
    setTheme("theme3");
  } else if (classList.contains("theme2") && classList.contains("theme3")) {
    classList.remove("theme2");
    classList.remove("theme3");
    setTheme("theme1");
  }
});

function getCurrentTheme() {
  let userPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  // dark = theme1, light = theme2;
  return userPrefersDark ? "theme1" : "theme2";
}

function setTheme(userPrefered) {
  const root = document.querySelector(":root");
  root.setAttribute("theme", `${userPrefered}`);
}

window.addEventListener("DOMContentLoaded", () => {
  setTheme(getCurrentTheme());
});

const CALCULATIONS = document.getElementById("calculation");
const RESULT = document.getElementById("result");
const BTNS_CONTAINER = document.getElementById("inputContainer");

var output = 0;
var OperandOne = 0;
var OperandTwo = 0;
var operator = "";
var textBuffer = [];
var targetId = "";

BTNS_CONTAINER.addEventListener("click", (e) => {
  targetId = e.target.id;

  if (targetId == "clear" || targetId == "delete" || targetId == "result") {
    if (targetId == "clear") {
      textBuffer = [];
      OperandOne = 0;
      OperandTwo = 0;
      CALCULATIONS.innerText = "";
      RESULT.innerText = "";
    } else if (targetId === "result") {
      showOutput();
    } else if (targetId === "delete") {
      textBuffer.pop();
    }
  }

  if (e.target.classList.contains("operator")) {
    if (textBuffer.join("").match(/[\s*/%+-]+/g)) {
      showOutput();
      textBuffer.push(e.target.innerText);
    } else {
      operator = e.target.innerText;
      textBuffer.push(operator);
    }
  } else if (e.target.classList.contains("number")) {
    textBuffer.push(e.target.innerText);
  }
  CALCULATIONS.innerText = textBuffer.join("");
});

function showOutput() {
  var operandArr = textBuffer.join("").split(/[\s*/%+-]+/g);
  OperandOne = parseFloat(operandArr[0]);
  OperandTwo = parseFloat(operandArr[1]);

  textBuffer = [];
  var output = calculteOutput(OperandOne, operator, OperandTwo);
  textBuffer.push(output);
  RESULT.innerText = output;
}

function calculteOutput(OperandOne, operator, OperandTwo) {
  switch (operator) {
    case "+":
      output = OperandOne + OperandTwo;
      break;
    case "-":
      output = OperandOne - OperandTwo;
      break;
    case "/":
      output = OperandOne / OperandTwo;
      break;
    case "*":
      output = OperandOne * OperandTwo;
      break;
    case "%":
      output = OperandOne % OperandTwo;
      break;
  }
  return parseFloat(output.toFixed(4));
}
