// main button
const rakyaButton = document.querySelector(".rakyabutton");
let output = document.querySelector("#counter");
clicks = document.querySelector("#clicks");
let count = 0;
let multiplier = 1;
rakyaButton.addEventListener("click", function () {
  count += multiplier;
  output.innerHTML = `Current Count: ${count}`;
});

//upgrades
//u1

let marketButton = document.querySelector("#u1");
function marketUpgrade() {
  if (count >= 25) {
    multiplier += 1;
    count -= 25;
    output.innerHTML = `Current Count: ${count}`;
    clicks.innerHTML = `Rakya per click: ${multiplier}`;
  }
}
marketButton.addEventListener("click", marketUpgrade);

//u2

let distilleryButton = document.querySelector("#u2");
function distilleryUpgrade() {
  if (count >= 250) {
    multiplier += 15;
    count -= 250;
    output.innerHTML = `Current Count: ${count}`;
    clicks.innerHTML = `Rakya per click: ${multiplier}`;
  }
}
distilleryButton.addEventListener("click", distilleryUpgrade);

//u3

let volunteerButton = document.querySelector("#u3");
function volunteerUpgrade() {
  if (count >= 2500) {
    multiplier += 150;
    count -= 2500;
    output.innerHTML = `Current Count: ${count}`;
    clicks.innerHTML = `Rakya per click: ${multiplier}`;
  }
}
volunteerButton.addEventListener("click", volunteerUpgrade);

//u4
let wideButton = document.querySelector("#u4");
function wideUpgrade() {
  if (count >= 25000) {
    multiplier += 1500;
    count -= 25000;
    output.innerHTML = `Current Count: ${count}`;
    clicks.innerHTML = `Rakya per click: ${multiplier}`;
  }
}
wideButton.addEventListener("click", wideUpgrade);

//u5
let nationButton = document.querySelector("#u5");
function nationUpgrade() {
  if (count >= 250000) {
    multiplier += 15000;
    count -= 250000;
    output.innerHTML = `Current Count: ${count}`;
    clicks.innerHTML = `Rakya per click: ${multiplier}`;
  }
}
nationButton.addEventListener("click", nationUpgrade);

//u6
let factoryButton = document.querySelector("#u6");
function factoryUpgrade() {
  if (count >= 2500000) {
    multiplier += 150000;
    count -= 2500000;
    output.innerHTML = `Current Count: ${count}`;
    clicks.innerHTML = `Rakya per click: ${multiplier}`;
  }
}
factoryButton.addEventListener("click", factoryUpgrade);

//u7
let internationlButton = document.querySelector("#u7");
function factoryUpgrade() {
  if (count >= 50000000) {
    multiplier *= 3;
    count -= 50000000;
    output.innerHTML = `Current Count: ${count}`;
    clicks.innerHTML = `Rakya per click: ${multiplier}`;
  }
}
internationalButton.addEventListener("click", internationalUpgrade);