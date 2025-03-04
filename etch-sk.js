/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let color;
let click = true;
function makeGrid(size) {
    let umbrella = document.querySelector("#umbrella");
    let cells = umbrella.querySelectorAll("div");
    cells.forEach(div => div.remove());
    umbrella.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    umbrella.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    let amount = size * size;
    for (let c = 0; c < amount; c++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", colourSquare);
        umbrella.insertAdjacentElement("beforeend", cell);
    };
}
makeGrid(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        makeGrid(input);
    } else {
        console.log("ERROR")
    }
}
function colourSquare() {
    if (click) {
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
        this.style.backgroundColor = color;
    }

}
}
function changeColor(choice) {
    color = choice;
}
function resetBoard() {
    let cells = umbrella.querySelectorAll("div");
    cells.forEach(div => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener("click" , () => click = !click)