document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button");
  const display = document.getElementById("display");
  let currentInput = "";
  let resultDisplayed = false;

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const value = this.getAttribute("data-value");

      if (value === "C") {
        currentInput = "";
        display.innerText = "0";
      } else if (value === "CE") {
        currentInput = currentInput.slice(0, -1);
        display.innerText = currentInput || "0";
      } else if (value === "=") {
        try {
          currentInput = eval(currentInput);
          display.innerText = currentInput;
          resultDisplayed = true;
        } catch (error) {
          display.innerText = "Error";
          currentInput = "";
        }
      } else {
        if (resultDisplayed) {
          currentInput = value;
          resultDisplayed = false;
        } else {
          currentInput += value;
        }
        display.innerText = currentInput;
      }
    });
  });
});
