function setUpGrid(rowSize) {
    if(rowSize > 100) { 
        rowSize = 100
    }
    color = setRandomColor();
    let grid = document.querySelector(".grid");
    while(grid.firstChild) {   //clear current grid
        grid.removeChild(grid.firstChild);
    }

    for(let j=0; j<rowSize; j++) {
        let row = document.createElement("div");
        row.classList.add("row");
        grid.append(row);
        for(let i=0; i<rowSize; i++) {
            let square = document.createElement("div");
            square.addEventListener('mouseover', hover);
            square.classList.add("square");
            row.append(square);
        }
    }
}

function hover() {
    this.style.backgroundColor = color;
    this.classList.add("colored");
}

function reset() {
    let rowSize = prompt("How many squares per side would you like your new drawing to be? (max 100)", "16");
    while(!rowSize || isNaN(parseInt(rowSize))) {
        rowSize = prompt("You did not enter a valid number, please use integers only.\nHow many squares per side would you like your new drawing to be? (max 100)", "16");
    }
    setUpGrid(parseInt(rowSize));
}

function addColor() {
    //fade all previous colors by 10%
    let coloredSquares = document.querySelectorAll('.colored');
    coloredSquares.forEach(square => {
        let newColor = fadeRGBColor(square.style.backgroundColor)
        square.style.backgroundColor = newColor;
    });
 
    //randomly select new color
    color = setRandomColor();
}

function setRandomColor() {
    let newColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
    addColorBtn.style.backgroundColor = newColor;
    return newColor;
}

function fadeRGBColor(color) {
    let a = color.slice(4,-1); // convert "rbg(255,255,255) to 255,255,255
    a = a.split(",");
    let r = Math.floor(parseInt(a[0]) * 0.8);
    let g = Math.floor(parseInt(a[1]) * 0.8);
    let b = Math.floor(parseInt(a[2]) * 0.8);

    return `rgb(${r},${g},${b})`
}

const resetBtn = document.querySelector('#reset-btn');
const addColorBtn = document.querySelector('#add-color-btn');
resetBtn.addEventListener('click', reset);
addColorBtn.addEventListener('click', addColor);
let color;
setUpGrid(16);