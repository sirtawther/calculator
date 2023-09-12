let currentValue = "";
let previousValue = "";
let operator = "";

let operators = document.querySelectorAll(".operator");
let nums = document.querySelectorAll(".num");
let currentScreen = document.querySelector(".current");
let previousScreen = document.querySelector(".previous");
let equal = document.querySelector(".equal");
let dot = document.querySelector(".dot");
let percent = document.querySelector(".percent");
let squareRoot = document.querySelector(".sqrt");

percent.addEventListener("click", () => {
  if (previousValue == "") {
    currentValue = (currentValue * 1) / 100;
  } else {
    currentValue = currentValue * ((1 / 100) * 100);
  }
  currentScreen.textContent += percent.value;
});

squareRoot.addEventListener("click", () => {
  currentValue = Math.sqrt(currentValue);
  currentScreen.textContent = currentValue;
});
dot.addEventListener("click", () => {
  currentValue = currentValue + dot.value;

  let new_num = currentValue.split(".");
  new_num.splice(1, 0, ".").join("");
  let final_num = new_num.join("");
  currentValue = final_num;
  currentScreen.textContent = final_num;
});

nums.forEach((num) =>
  num.addEventListener("click", () => {
    if (currentValue == "0") {
      currentScreen.textContent = "";
      currentValue = "";
    }
    if (currentValue.length <= 10) {
      currentValue += num.value;

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
    currentValue = previousValue - currentValue;
  } else if (operator == "x") {
    currentValue = currentValue * previousValue;
  } else if (operator == "÷") {
    currentValue = Math.round((previousValue / currentValue) * 100) / 100;
  }

  currentScreen.textContent = currentValue;
  previousScreen.textContent = "";
}

equal.addEventListener("click", calculate);

let clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
  currentValue = Number(currentValue.toString().slice(0, -1));
  currentScreen.textContent = currentValue;
});

function setZero() {
  currentValue = "0";
  previousValue = "";
  currentScreen.textContent = "0";
  previousScreen.textContent = "";
}
