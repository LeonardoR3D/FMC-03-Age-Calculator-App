// Global variables
const inputDaySection = document.querySelector("#input-day-section");
const inputMonthSection = document.querySelector("#input-month-section");
const inputYearSection = document.querySelector("#input-year-section");
const inputDayTitle = document.querySelector("#input-day-title");
const inputMonthTitle = document.querySelector("#input-month-title");
const inputYearTitle = document.querySelector("#input-year-title");
const inputDay = document.querySelector("#input-day");
const inputMonth = document.querySelector("#input-month");
const inputYear = document.querySelector("#input-year");

const allInputsSections = [
  inputDaySection,
  inputMonthSection,
  inputYearSection,
];
const allInputsTitles = [inputDayTitle, inputMonthTitle, inputYearTitle];
const allInputs = [inputDay, inputMonth, inputYear];

const btnAgeCalc = document.querySelector("#btn-age-calc");
// .
// .
// .
// .
// .
// .
// .
// . Constraining numbers in the inputs
[inputDay, inputMonth].forEach((input) => {
  input.setAttribute(
    "oninput",
    "this.value = this.value.replace(/[^0-9]/g, '').substring(0, 2);"
  );
});

inputYear.setAttribute(
  "oninput",
  "this.value = this.value.replace(/[^0-9]/g, '').substring(0, 4);"
);
// .
// .
// .
// .
// .
// .
// .
// . Functions
function clearWarnings(array) {
  array.forEach((input, index) => {
    if (input.classList.contains("warning")) {
      let selectElementP = allInputsSections[index].querySelector(
        ".age-calc__warning-text"
      );
      allInputsTitles[index].classList.remove("warning");
      input.classList.remove("warning");
      allInputsSections[index].removeChild(selectElementP);
    }
  });
}

function checkIfIsEmpty(array) {
  array.forEach((input, index) => {
    let warningText = document.createElement("p");
    warningText.setAttribute("class", "age-calc__warning-text");
    warningText.textContent = "This field is required";

    if (input.value === "") {
      allInputsTitles[index].classList.add("warning");
      input.classList.add("warning");
      allInputsSections[index].appendChild(warningText);
    }
  });
}

function checkIfIsValid(array) {
  array.forEach((input, index) => {
    if (!input.classList.contains("warning")) {
      let warningText = document.createElement("p");
      warningText.setAttribute("class", "age-calc__warning-text");
      warningMessage = [
        "Must be a valid day",
        "Must be a valid month",
        "Must be in the past",
      ];
      let value = ["day", "month", "year"];
      // Change the 2023 condition later for the current year
      let condition = [31, 12, 2023];

      if (Number(input.value) > condition[index]) {
        allInputsTitles[index].classList.add("warning");
        input.classList.add("warning");
        warningText.textContent = warningMessage[index];
        allInputsSections[index].appendChild(warningText);
      } else if (Number(input.value) === 0) {
        allInputsTitles[index].classList.add("warning");
        input.classList.add("warning");
        warningText.textContent = `The ${value[index]} can't be 0`;
        allInputsSections[index].appendChild(warningText);
      }
    }
  });
}

function calculateAge() {
  clearWarnings(allInputs);
  checkIfIsEmpty(allInputs);
  checkIfIsValid(allInputs);
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
