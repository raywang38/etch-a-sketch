const container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "520px";

const selectGrid = document.createElement("button");
selectGrid.textContent = "Grid";

const clearButton = document.createElement("button");
clearButton.textContent = "Clear";

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const squareDiv = document.createElement("div");
        squareDiv.style.backgroundColor = "lightGray";
        squareDiv.style.minWidth = "30px";
        squareDiv.style.minHeight = "30px";
        squareDiv.style.borderColor = "black";
        squareDiv.style.borderWidth = "1px";
        squareDiv.style.borderStyle = "solid";
        container.appendChild(squareDiv);

        squareDiv.addEventListener("mouseover", () => {
            squareDiv.style.backgroundColor = "black";
        })
    }
}
