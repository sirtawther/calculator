let currentValue = "";
let previousValue = "";
let operator = "";

let operators = document.querySelectorAll(".operator");
let nums = document.querySelectorAll(".num");
let currentScreen = document.querySelector(".current");
let previousScreen = document.querySelector(".previous");
let equal = document.querySelector(".equal");

nums.forEach((num) =>
  num.addEventListener("click", () => {
    
    currentValue += num.value;

    if (currentValue.length <= 10) {
      currentScreen.textContent += num.value;
    }
  })
);

operators.forEach((item) =>
  item.addEventListener("click", () => {
    previousValue = currentValue;
    previousScreen.textContent = previousValue + " " + item.value;
    operator = item.value;
    currentValue = "";
    currentScreen.textContent = "";
  })
);

function calculate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator == "+") {
    currentValue = previousValue + currentValue;
  } else if (operator == "-") {
    currentValue = currentValue - previousValue;
  } else if (operator == "x") {
    currentValue = currentValue * previousValue;
  } else if (operator == "÷") {
    currentValue = Math.round((previousValue / currentValue) * 100) / 100;
  }

  currentScreen.textContent = currentValue;
  previousScreen.textContent = "";
}

equal.addEventListener("click", calculate);


let clear = document.querySelector(".clear")

clear.addEventListener("click", () => {
    currentValue = Number(currentValue.toString().slice(0, -1));
    currentScreen.textContent = currentValue
})

function setZero() {
    currentValue = ""
    previousValue = ""
    currentScreen.textContent = "0"
    previousScreen.textContent = ""
}