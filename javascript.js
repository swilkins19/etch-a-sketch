function setUpGrid(rowSize) {
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
    this.style.backgroundColor = 'blue';
}

function reset() {
    let rowSize = prompt("How many squares per side would you like your new drawing to be? (max 100)", "16");
    while(!rowSize || isNaN(parseInt(rowSize))) {
        rowSize = prompt("You did not enter a valid number, please use integers only.\nHow many squares per side would you like your new drawing to be? (max 100)", "16");
    }
    setUpGrid(parseInt(rowSize));
}

const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', reset);
setUpGrid(16);