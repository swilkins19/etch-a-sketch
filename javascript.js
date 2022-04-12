function setUpGrid(rowSize) {
    let grid = document.querySelector(".grid");
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

setUpGrid(16);