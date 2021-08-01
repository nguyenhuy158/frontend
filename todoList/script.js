let mainScreen = document.querySelector(".main");
let btnEqual = document.querySelector(".btn-equal");
let btnDel = document.querySelector(".btn-del");
let btnClear = document.querySelector(".btn-clear");
let btnDot = document.querySelector(".btn-dot");
let btnPlus = document.querySelector(".btn-add");
let btnMinus = document.querySelector(".btn-minus");
let btnTime = document.querySelector(".btn-time");
let btnDivision = document.querySelector(".btn-division");

let btns = document.querySelectorAll(".btn");
let preValue = 0;
let calculations = "";

function changeScreen(value) {
    mainScreen.innerText = value;
}

console.log(btnPlus);

btnPlus.onclick = () => {
    preValue = parseInt(mainScreen.innerText);
    calculations = "+";
    changeScreen(0);
    console.log(preValue);
};

btnMinus.onclick = () => {
    preValue = parseInt(mainScreen.innerText);
    calculations = "-";
    changeScreen(0);
    console.log(preValue);
};

btnTime.onclick = () => {
    preValue = parseInt(mainScreen.innerText);
    calculations = "*";
    changeScreen(0);
    console.log(preValue);
};

btnDivision.onclick = () => {
    preValue = parseInt(mainScreen.innerText);
    calculations = "/";
    changeScreen(0);
    console.log(preValue);
};

btnDot.onclick = () => {
    let countDot = 0;

    for (let i = 0; i < mainScreen.innerText.length; i++) {
        if (mainScreen.innerText[i] === ".") {
            countDot++;
        }
    }

    console.log(countDot);
    if (countDot < 1) {
        changeScreen(mainScreen.innerText + ".");
    }
};

btnEqual.onclick = () => {
    if (calculations.length !== 0) {
        if (calculations === "+") {
            changeScreen(parseInt(preValue) + parseInt(mainScreen.innerText));
        }
        if (calculations === "-") {
            changeScreen(parseInt(preValue) - parseInt(mainScreen.innerText));
        }
        if (calculations === "*") {
            changeScreen(parseInt(preValue) * parseInt(mainScreen.innerText));
        }
        if (calculations === "/") {
            changeScreen(parseInt(preValue) / parseInt(mainScreen.innerText));
        }
    } else {
        changeScreen(mainScreen.innerText);
    }
};

btnDel.onclick = () => {
    let removed = mainScreen.innerText.substring(
        0,
        mainScreen.innerText.length - 1
    );
    if (removed.length === 0) {
        changeScreen(0);
    } else {
        changeScreen(removed);
    }
};

btnClear.onclick = () => {
    preValue = 0;
    calculations = "";
    changeScreen(0);
};

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = () => {
        if (parseInt(mainScreen.innerText) !== 0) {
            changeScreen(mainScreen.innerText + btns[i].innerText);
        } else {
            changeScreen(btns[i].innerText);
        }
    };
}
