/* eslint-disable @typescript-eslint/no-unused-vars */
 
/* eslint-disable no-undef */ 
const container = document.querySelector("#umbrella");
let color;
function makeGrid(size) {
    let cells = container.querySelectorAll("div");
    cells.forEach(div => div.remove());
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    let amount = size * size;
    for (c = 0; c < amount; c++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", colourSquare);
        container.insertAdjacentElement("beforeend", cell);
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
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
        this.style.backgroundColor = color;
    }

}
function changeColor(choice) {
    color = choice;
}