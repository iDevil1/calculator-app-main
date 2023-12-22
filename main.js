let result = document.querySelector(".screen-text");
let numbers = document.querySelectorAll(".number");
let dotElement = document.querySelector(".dot");
let operators = document.querySelectorAll(".operator");
let deleteBtn = document.querySelector(".delete");
let resetBtn = document.querySelector(".reset");
let equalBtn = document.querySelector(".equal");
let h4Title = document.querySelector("h4");
let themeTitle = document.querySelector(".theme-title");

let screenContainer = document.querySelector(".screen-container");
let calculatorContainer = document.querySelector(".calculator-container");
let subContainer = document.querySelector(".sub-container");

let inputs = document.querySelectorAll("input[type='radio']");
let themeSpans = document.querySelector(".numbers-container").children;

for (let i = 0; i < themeSpans.length; i++) {
  themeSpans[i].onclick = (e) => {
    if (themeSpans[i].innerText === "1") {
      themeOne();
    } else if (themeSpans[i].innerText === "2") {
      themeTwo();
    } else if (themeSpans[i].innerText === "3") {
      themeThree();
    }
  };
}

const root = document.querySelector(":root");

function themeOne() {
  document.body.style.backgroundColor = "var(--body-bg)";

  h4Title.style.color = "#fff";
  themeTitle.style.color = "#fff";

  root.style.setProperty("--circle-left", "3px");

  root.style.setProperty("--numbers-container-color", "#fff");

  root.style.setProperty("--sub-container-before-bg", "#ee725a");

  subContainer.style.backgroundColor = "var(--sub-container-bg)";

  screenContainer.style.backgroundColor = "var(--screen-container-bg)";

  calculatorContainer.style.backgroundColor = "var(--calculator-container-bg)";

  result.style.color = "#fff";

  numbers.forEach((number) => {
    number.style.backgroundColor = "var(--number-bg)";
    number.style.color = "#22211d";
    number.style.borderBottom = "3px solid var(--number-border)";
    number.onmouseenter = () => {
      number.style.backgroundColor = "var(--number-hover)";
    };
    number.onmouseleave = () => {
      number.style.backgroundColor = "var(--number-bg)";
    };
  });

  deleteBtn.style.backgroundColor = "var(--delete-bg)";
  deleteBtn.style.borderBottom = "3px solid var(--delete-border)";
  deleteBtn.onmouseenter = () => {
    deleteBtn.style.backgroundColor = "var(--delete-hover)";
  };
  deleteBtn.onmouseleave = () => {
    deleteBtn.style.backgroundColor = "var(--delete-bg)";
  };
  resetBtn.style.backgroundColor = "var(--delete-bg)";
  resetBtn.style.borderBottom = "3px solid var(--delete-border)";
  resetBtn.onmouseenter = () => {
    resetBtn.style.backgroundColor = "var(--delete-hover)";
  };
  resetBtn.onmouseleave = () => {
    resetBtn.style.backgroundColor = "var(--delete-bg)";
  };
  equalBtn.style.backgroundColor = "var(--equal-bg)";
  equalBtn.style.borderBottom = "3px solid var(--equal-border)";
  equalBtn.onmouseenter = () => {
    equalBtn.style.backgroundColor = "var(--equal-hover)";
  };
  equalBtn.onmouseleave = () => {
    equalBtn.style.backgroundColor = "var(--equal-bg)";
  };
}

function themeTwo() {
  document.body.style.backgroundColor = "var(--theme-2-body-bg)";

  h4Title.style.color = "#22211d";
  themeTitle.style.color = "#22211d";

  root.style.setProperty("--circle-left", "18.5px");
  root.style.setProperty("--numbers-container-color", "##22211d");
  root.style.setProperty("--sub-container-before-bg", "#ff8a33");
  subContainer.style.backgroundColor = "var(--theme-2-sub-container-bg)";

  screenContainer.style.backgroundColor = "var(--theme-2-screen-container-bg)";

  calculatorContainer.style.backgroundColor =
    "var(--theme-2-calculator-container-bg)";

  result.style.color = "#22211d";

  numbers.forEach((number) => {
    number.style.backgroundColor = "var(--theme-2-number-bg)";
    number.style.color = "#22211d";
    number.style.borderBottom = "3px solid var(--number-border)";
    number.onmouseenter = () => {
      number.style.backgroundColor = "var(--theme-2-number-hover)";
    };
    number.onmouseleave = () => {
      number.style.backgroundColor = "var(--theme-2-number-bg)";
    };
  });

  deleteBtn.style.backgroundColor = "var(--theme-2-delete-bg)";
  deleteBtn.style.borderBottom = "3px solid var(--theme-2-delete-border)";
  deleteBtn.onmouseenter = () => {
    deleteBtn.style.backgroundColor = "var(--theme-2-delete-hover)";
  };
  deleteBtn.onmouseleave = () => {
    deleteBtn.style.backgroundColor = "var(--theme-2-delete-bg)";
  };
  resetBtn.style.backgroundColor = "var(--theme-2-delete-bg)";
  resetBtn.style.borderBottom = "3px solid var(--theme-2-delete-border)";
  resetBtn.onmouseenter = () => {
    resetBtn.style.backgroundColor = "var(--theme-2-delete-hover)";
  };
  resetBtn.onmouseleave = () => {
    resetBtn.style.backgroundColor = "var(--theme-2-delete-bg)";
  };
  equalBtn.style.backgroundColor = "var(--theme-2-equal-bg)";
  equalBtn.style.borderBottom = "3px solid var(--theme-2-equal-border)";
  equalBtn.onmouseenter = () => {
    equalBtn.style.backgroundColor = "var(--theme-2-equal-hover)";
  };
  equalBtn.onmouseleave = () => {
    equalBtn.style.backgroundColor = "var(--theme-2-equal-bg)";
  };
}

function themeThree() {
  document.body.style.backgroundColor = "var(--theme-3-body-bg)";

  h4Title.style.color = "var(--theme-3-yellow-color)";
  themeTitle.style.color = "var(--theme-3-yellow-color)";

  root.style.setProperty("--circle-left", "37px");

  root.style.setProperty("--numbers-container-color", "#ffe943");

  root.style.setProperty("--sub-container-before-bg", "#92fcf7");

  subContainer.style.backgroundColor = "var(--theme-3-sub-container-bg)";

  screenContainer.style.backgroundColor =
    "var(--theme-3-calc-and-screen-containers-bg)";

  calculatorContainer.style.backgroundColor =
    "var(--theme-3-calc-and-screen-containers-bg)";

  result.style.color = "var(--theme-3-yellow-color)";

  numbers.forEach((number) => {
    number.style.backgroundColor = "var(--theme-3-number-bg)";
    number.style.color = "var(--theme-3-yellow-color)";
    number.style.borderBottom = "3px solid var(--theme-3-number-border)";
    number.onmouseenter = () => {
      number.style.backgroundColor = "var(--theme-3-number-hover)";
    };
    number.onmouseleave = () => {
      number.style.backgroundColor = "var(--theme-3-number-bg)";
    };
  });

  deleteBtn.style.backgroundColor = "var(--theme-3-delete-bg)";
  deleteBtn.style.borderBottom = "3px solid var(--theme-3-delete-border)";
  deleteBtn.onmouseenter = () => {
    deleteBtn.style.backgroundColor = "var(--theme-3-delete-hover)";
  };
  deleteBtn.onmouseleave = () => {
    deleteBtn.style.backgroundColor = "var(--theme-3-delete-bg)";
  };
  resetBtn.style.backgroundColor = "var(--theme-3-delete-bg)";
  resetBtn.style.borderBottom = "3px solid var(--theme-3-delete-border)";
  resetBtn.onmouseenter = () => {
    resetBtn.style.backgroundColor = "var(--theme-3-delete-hover)";
  };
  resetBtn.onmouseleave = () => {
    resetBtn.style.backgroundColor = "var(--theme-3-delete-bg)";
  };
  equalBtn.style.backgroundColor = "var(--theme-3-equal-bg)";
  equalBtn.style.borderBottom = "3px solid var(--theme-3-equal-border)";
  equalBtn.onmouseenter = () => {
    equalBtn.style.backgroundColor = "var(--theme-3-equal-hover)";
  };
  equalBtn.onmouseleave = () => {
    equalBtn.style.backgroundColor = "var(--theme-3-equal-bg)";
  };
}

inputs.forEach((input) => {
  // console.log(input.checked);
  // if (input.checked) {
  //   for (let i = 0; i < themeSpans.length; i++) {
  //     if (themeSpans[i].className == input.getAttribute("data-class")) {
  //       themeSpans[i].style.color = "green";
  //     }
  //   }
  // }

  input.onclick = (e) => {
    if (e.target.classList.contains("input-one")) {
      themeOne();
    } else if (e.target.classList.contains("input-two")) {
      themeTwo();
    } else if (e.target.classList.contains("input-three")) {
      themeThree();
    }
    // if (input.checked) {
    //   for (let i = 0; i < themeSpans.length; i++) {
    //     if (themeSpans[i].className == input.getAttribute("data-class")) {
    //       themeSpans[i].style.color = "green";
    //     } else {
    //       themeSpans[i].style.color = "black";
    //     }
    //   }
    // }
  };
});

let dotClicked = false;
let operatorClicked = false;

numbers.forEach((number) => {
  number.onclick = (e) => {
    if (e.target.classList.contains("dot")) {
      if (dotClicked) {
        return;
      }
      dotClicked = true;
    }

    if (e.target.classList.contains("operator")) {
      operators.forEach((operator) => {
        operator.classList.remove("active");
      });
      e.target.classList.add("active");
      if (operatorClicked) {
        if (e.target.classList.contains("active")) {
          // var regex = new RegExp(
          //   result.value
          //     .split("")
          //     [result.value.split("").length - 1].replace(
          //       /[.*+?^${}()|[\]\\]/g,
          //       "\\$&"
          //     ), // to escape the special character in regex and treat it as a normal character
          //   "g"
          // );
          // Don't need no more but I'll leaeve it

          let lastOperator =
            result.value.split("")[result.value.split("").length - 1];

          let newOperator = e.target.innerText;

          if (lastOperator !== newOperator) {
            // result.value = result.value.replace(regex, newOperator); // We don't need it because it replaces all the characters that are equal to the regex and I only want the last character
            result.value = result.value.slice(0, -1) + newOperator; // This only replaces the last charcter with the new one
          }
        }
        return;
      }
      dotClicked = false;
      operatorClicked = true;
    } else {
      // If a number is clicked, reset operatorClicked to false
      operatorClicked = false;
    }
    result.value = result.value + e.target.innerText;
  };
});

resetBtn.onclick = () => {
  result.value = "";
};

deleteBtn.onclick = (e) => {
  if (result.value.split("").pop() === dotElement.innerText) {
    dotClicked = false;
  }
  operators.forEach((operator) => {
    if (result.value.split("").pop() === operator.innerText) {
      operatorClicked = false;
    }
  });
  result.value = result.value.slice(0, -1);
};

equalBtn.onclick = (e) => {
  const filteredExp = result.value.replace(/[^-()\d/x+.]/g, "");
  const allElements = filteredExp.match(/(\d+(\.\d+)?|[x/+\-()])/g);

  const outputArray = [];
  const operatorsArray = [];
  const operators = { "+": 1, "-": 1, x: 2, "/": 2 };
  if (result.value != "") {
    allElements.forEach((element) => {
      if (/\d+(\.\d+)?/.test(element)) {
        outputArray.push(parseFloat(element));
      } else if (/[x/+\-]/.test(element)) {
        while (
          operatorsArray.length > 0 &&
          operators[operatorsArray[operatorsArray.length - 1]] >=
            operators[element]
        ) {
          outputArray.push(operatorsArray.pop());
        }
        operatorsArray.push(element);
      }
    });
    while (operatorsArray.length > 0) {
      outputArray.push(operatorsArray.pop());
    }

    const resultArray = [];

    if (
      !isNaN(Number(result.value.split("")[result.value.split("").length - 1]))
    ) {
      outputArray.forEach((element) => {
        if (typeof element === "number") {
          resultArray.push(element);
        } else {
          const b = resultArray.pop();
          const a = resultArray.pop();
          switch (element) {
            case "+":
              resultArray.push(a + b);
              break;
            case "-":
              if (typeof a === "number") {
                resultArray.push(a - b);
              } else {
                // If 'a' is not a number, consider it as a negative number
                resultArray.push(-b);
              }

              break;
            case "x":
              resultArray.push(a * b);
              break;
            case "/":
              if (b !== 0) {
                resultArray.push(a / b);
              } else {
                // Handle division by zero, for example, setting result to NaN
                resultArray.push(NaN);
              }
              break;
          }
        }
      });
      result.value = resultArray[0].toLocaleString("en-US");
    }
  }
};
