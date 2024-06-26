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
    squareDiv.style.opacity = 0.1;
    squareDiv.setAttribute("class", "originalSquare");
    container.appendChild(squareDiv);

    squareDiv.addEventListener("mouseover", () => {
        squareDiv.style.backgroundColor = getRandomColor();
        squareDiv.style.opacity = parseFloat(squareDiv.style.opacity) + 0.1;
    })

    clearButton.addEventListener("click", () => {
        squareDiv.style.backgroundColor = "lightGray";
    })
}

selectGrid.addEventListener("click", () => {

    let gridNumber = prompt("Please enter the number of squares for the grid, between 0 and 100 inclusive.", "");
    gridNumber = parseInt(gridNumber);

    if (isNaN(gridNumber) || gridNumber < 0 || gridNumber > 100) {
        alert("That is not a valid number");
    }
    else {
        const removedSquares = document.querySelectorAll(".originalSquare, .modifiedSquare");

        for (const removedSquare of removedSquares) {
            removedSquare.remove();
        }
    
        for (let j = 0; j < gridNumber * gridNumber; j++) {
            const squareDiv = document.createElement("div");
            squareDiv.style.backgroundColor = "lightGray";
            squareDiv.style.minWidth = 512 / gridNumber - 2 + "px";
            squareDiv.style.minHeight = 512 / gridNumber - 2 + "px";
            squareDiv.style.borderColor = "black";
            squareDiv.style.borderWidth = "1px";
            squareDiv.style.borderStyle = "solid";
            squareDiv.style.opacity = 0.1;

            squareDiv.setAttribute("class", "modifiedSquare");
            container.appendChild(squareDiv);
            
            squareDiv.addEventListener("mouseover", () => {
                squareDiv.style.backgroundColor = getRandomColor();
                squareDiv.style.opacity = parseFloat(squareDiv.style.opacity) + 0.1;
            })
        
            clearButton.addEventListener("click", () => {
                squareDiv.style.backgroundColor = "lightGray";
            })    
        }
    }
})

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

