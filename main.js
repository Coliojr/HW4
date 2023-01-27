document.addEventListener("DOMContentLoaded", function (event) {

    let origArray = [2,3,4];

    document.getElementById("textbox1").value = origArray[0];
    document.getElementById("textbox2").value = origArray[1];
    document.getElementById("textbox3").value = origArray[2];


    document.getElementById("button2").addEventListener("click", function () {
        let x = origArray.map(cube);
        document.getElementById("textbox1").value = x[0];
        document.getElementById("textbox2").value = x[1];
        document.getElementById("textbox3").value = x[2];
    });

    document.getElementById("button3").addEventListener("click", button3);
});

let origArray = [2,3,4];

function button1Function() {
    let x = origArray.map(square);
    document.getElementById("textbox1").value = x[0];
    document.getElementById("textbox2").value = x[1];
    document.getElementById("textbox3").value = x[2]; 
}

function button3() {
    let x = origArray.map(four);
    document.getElementById("textbox1").value = x[0];
    document.getElementById("textbox2").value = x[1];
    document.getElementById("textbox3").value = x[2];
}

function square(item) {
    let x = item ** 2;
    return x;
}

function cube(item) {
    let x = item ** 3;
    return x;
}

function four(item) {
    let x = item ** 4;
    return x;
}