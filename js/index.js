// Variables
const ageCalcInputsMax2 = document.querySelectorAll(".age-calc__input.max-2");
const ageCalcInputsMax4 = document.querySelectorAll(".age-calc__input.max-4");
const allInputs = document.querySelectorAll(".age-calc__input");
const allInputsTitles = document.querySelectorAll(".age-calc__h1");
const btnAgeCalc = document.querySelector(".age-calc__btn");
// .
// .
// .
// .
// .
// .
// .
// . Constraining numbers in the inputs
ageCalcInputsMax2.forEach((input) => {
  input.setAttribute(
    "oninput",
    "this.value = this.value.replace(/[^0-9]/g, '').substring(0, 2);"
  );
});
ageCalcInputsMax4.forEach((input) => {
  input.setAttribute(
    "oninput",
    "this.value = this.value.replace(/[^0-9]/g, '').substring(0, 4);"
  );
});
// .
// .
// .
// .
// .
// .
// .
// . Functions
function calculateAge() {
  for (let index in allInputs) {
    let containWarning = false;
    containWarning = allInputs[index].classList.contains("warning");

    if (allInputs[index].value === "") {
      allInputsTitles[index].classList.add("warning");
      allInputs[index].classList.add("warning");
    } else if (containWarning === true) {
      allInputsTitles[index].classList.remove("warning");
      allInputs[index].classList.remove("warning");
      console.log(`removio ${index}`);
    }
  }
}
// .
// .
// .
// .
// .
// .
// .
// . Event listener
btnAgeCalc.addEventListener("click", calculateAge);
