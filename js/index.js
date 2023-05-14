// Variables
const ageCalcInputsMax2 = document.querySelectorAll(".age-calc__input.max-2");
const ageCalcInputsMax4 = document.querySelectorAll(".age-calc__input.max-4");
// .
// .
// .
// .
// .
// .
// .
// . On inputs
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
