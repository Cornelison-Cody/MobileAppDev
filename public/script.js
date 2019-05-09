let changeColor = function () {
    let colorArray = ["grey", "red", "blue", "green", "purple", "orange"];

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = colorArray[(++currentColor) % colorArray.length];
        boxes[i].style.color = "whitesmoke";
    }

};

let biggerBoxes = function () {
    currentPadding += 10;

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.padding = currentPadding + "px";
    }
};

let smallerBoxes = function () {
    currentPadding -= 10;

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.padding = currentPadding + "px";
    }
};

let moveUp = function () {
    if (currentLocation > 0) {
        currentLocation--;
    }

    document.body.style.alignItems = locationArray[currentLocation];
};

let moveDown = function () {
    if (currentLocation < 2) {
        currentLocation++;
    }

    document.body.style.alignItems = locationArray[currentLocation];
};

let currentColor = 0;
let currentPadding = 40;
let boxes = document.getElementsByClassName('box');
let locationArray = ["flex-start", "center", "flex-end"];
let currentLocation = 1;