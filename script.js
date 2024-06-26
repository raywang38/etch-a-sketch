const container = document.querySelector(".container");
container.style.width = 16 * 32 + "px";

const buttonField = document.querySelector(".buttons");

const selectGrid = document.createElement("button");
selectGrid.textContent = "Grid Configuration";
buttonField.appendChild(selectGrid);

const clearButton = document.createElement("button");
clearButton.textContent = "Clear Grid";
buttonField.appendChild(clearButton);

for (let i = 0; i < 16 * 16; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.style.backgroundColor = "lightGray";
    squareDiv.style.minWidth = "30px";
    squareDiv.style.minHeight = "30px";
    squareDiv.style.borderColor = "black";
    squareDiv.style.borderWidth = "1px";
    squareDiv.style.borderStyle = "solid";
    squareDiv.setAttribute("class", "originalSquare");
    container.appendChild(squareDiv);

    squareDiv.addEventListener("mouseover", () => {
        squareDiv.style.backgroundColor = "black";
    })

    clearButton.addEventListener("click", () => {
        squareDiv.style.backgroundColor = "lightGray";
    })
}

selectGrid.addEventListener("click", () => {

    let gridNumber;
    do {
        gridNumber = prompt("Please enter the number of squares for the grid", "");
        gridNumber = parseInt(gridNumber);
    } while (gridNumber < 0 || gridNumber > 100 /*|| typeof(gridNumber) == "number"*/)

    const removedSquares = document.querySelectorAll(".originalSquare, .modifiedSquare");

    for (const removedSquare of removedSquares) {
        removedSquare.remove();
    }

    container.style.width = gridNumber * 32 + "px";

    for (let j = 0; j < gridNumber * gridNumber; j++) {
        const squareDiv = document.createElement("div");
        squareDiv.style.backgroundColor = "lightGray";
        squareDiv.style.minWidth = "30px";
        squareDiv.style.minHeight = "30px";
        squareDiv.style.borderColor = "black";
        squareDiv.style.borderWidth = "1px";
        squareDiv.style.borderStyle = "solid";
        squareDiv.setAttribute("class", "modifiedSquare");
        container.appendChild(squareDiv);
        
        squareDiv.addEventListener("mouseover", () => {
            squareDiv.style.backgroundColor = "black";
        })
    
        clearButton.addEventListener("click", () => {
            squareDiv.style.backgroundColor = "lightGray";
        })    
    }
})

