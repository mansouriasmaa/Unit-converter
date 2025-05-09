const convertBtn = document.getElementById("convert-btn");
const userInput = document.getElementById("user-input");
const lengthDisplay = document.getElementById("length-display");
const volumeDisplay = document.getElementById("volume-display");
const massDisplay = document.getElementById("mass-display");

convertBtn.addEventListener("click", function () {
  let value = userInput.value;
  const meter = 3.281;
  const liter = 0.264;
  const kilogram = 2.204;

  if (value == "") {
    return false;
  }

  lengthDisplay.querySelectorAll("p").forEach((p) => p.remove());
  volumeDisplay.querySelectorAll("p").forEach((p) => p.remove());
  massDisplay.querySelectorAll("p").forEach((p) => p.remove());

  let meterResult = `<p>${value} meters = ${(value * meter).toFixed(
    3
  )} feet | ${value} feet = ${(value / meter).toFixed(3)} meters</p>`;

  let literResult = `<p>${value}  liters = ${(value * liter).toFixed(
    3
  )} gallons | ${value} gallons = ${(value / liter).toFixed(3)} liters</p>`;

  let kilogramResult = `<p>${value} kilos = ${(value * kilogram).toFixed(
    3
  )} pounds | ${value} pounds = ${(value / kilogram).toFixed(3)} kilos</p>`;

  lengthDisplay.innerHTML += meterResult;
  volumeDisplay.innerHTML += literResult;
  massDisplay.innerHTML += kilogramResult;

  userInput.value = "";
});

let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

function enableDarkmode() {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
}

function disableDarkmode() {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
}

if (darkmode === "active") {
  enableDarkmode();
}

themeSwitch.addEventListener("click", function () {
  darkmode = localStorage.getItem("darkmode");
  if (darkmode !== "active") {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
});
