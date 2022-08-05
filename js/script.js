let tipbuttons = document.querySelectorAll(".buttons button");
let billInput = document.getElementById("billInput");
let coustomInput = document.getElementById("coustomInput");
let peopleInput = document.getElementById("peopleInput");
const container = document.querySelector(".container");
const allInputs = document.querySelectorAll('input[type="number"]');
const tipAmount = document.querySelector(".tipAmount");
const totalResult = document.querySelector(".totalResult");
const reset = document.querySelector(".reset");

// reset all numbers
reset.addEventListener("click", (e) => {
  allInputs.forEach((inp) => {
    inp.value = "0";
  });
  totalResult.innerHTML = "0";
  tipAmount.innerHTML = "0";
});

// remove default number on focus
allInputs.forEach((inp) => {
  inp.addEventListener("focus", (e) => {
    inp.value = "";
  });
});

coustomInput.addEventListener("keyup", (e) => {
  const customInputTipPer = parseInt(coustomInput.value) / 100;
  const customTotalbill = (
    parseInt(billInput.value) / peopleInput.value +
    (parseInt(billInput.value) * customInputTipPer) / peopleInput.value
  ).toFixed(2);
  totalResult.innerHTML = customTotalbill;
  tipAmount.innerHTML = (
    (parseInt(billInput.value) * customInputTipPer) /
    peopleInput.value
  ).toFixed(2);
});

tipbuttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const buttonsTip = parseInt(e.target.value) / 100;
    console.log(buttonsTip);
    const buttonsbill = (
      parseInt(billInput.value) / peopleInput.value +
      (parseInt(billInput.value) * buttonsTip) / peopleInput.value
    ).toFixed(2);
    totalResult.innerHTML = buttonsbill;
    tipAmount.innerHTML = (
      (parseInt(billInput.value) * buttonsTip) /
      peopleInput.value
    ).toFixed(2);
  });
});
