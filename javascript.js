
const inputEl = document.getElementById("input");

function mainBtnDisplay(input) {
    inputEl.value += input;
}

function clearInput() {
    inputEl.value = "";
}

function calculate() {
    try {
        inputEl.value = eval(inputEl.value);
    }

    catch(error) {
        inputEl.value = "Syntax Error!";
    }
}