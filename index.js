const colorInput = document.querySelector("#color");
const widthInput = document.querySelector("#xPixel");
const heightInput = document.querySelector("#yPixel");
const clearButton = document.querySelector("#clear");
const sketchtGridContainer = document.querySelector(".sketch-grid");
const newGrid = document.querySelector("#newGrid")
function getInputColor() {
    pickedColor = this.value;

}
function getInputWidth() {
    gridWidth = this.value;
    updateGrid();
}
function getInputHeight() {
    gridHeight = this.value;    
    updateGrid();
}
function clearGrid() {
    sketchtGridContainer.innerHTML = "";
}
function updateGrid() {
    clearGrid();
    fillGrid(gridWidth * gridHeight);
    coloring();
}
function fillGrid(number) {
    for (let i = 0; i < number; i++){
        const gridItem = document.createElement("div");
        const suffix = "%"
        gridItem.style.height = `${calcGridItemSizeY(gridHeight)}` + suffix;
        gridItem.style.width = `${calcGridItemSizeX(gridWidth)}` + suffix;
        gridItem.id = i;
        gridItem.classList += "grid";
        sketchtGridContainer.appendChild(gridItem);       
    }
}
function calcGridItemSizeX(xPixel) {
    return 100 / xPixel;
}
function calcGridItemSizeY(yPixel) {
    return 100 / yPixel
}

function colorGrid(gridItem) {
    const item = document.querySelector("#" + gridItem.id)
    console.log(item)
    item.style.backgroundColor = pickedColor;
}
function coloring() {
    let wholeGrid = document.querySelectorAll(".grid");
    wholeGrid.forEach((gridItem) => {gridItem.addEventListener("click", () => gridItem.style.backgroundColor=pickedColor)});
}
let pickedColor = "black";
let gridWidth = 16;
let gridHeight = 16;
let wholeGrid = document.querySelectorAll(".grid");
updateGrid();
widthInput.addEventListener("input", getInputWidth);
heightInput.addEventListener("input", getInputHeight);
colorInput.addEventListener("change", getInputColor);
newGrid.addEventListener("click", () => updateGrid())
clearButton.addEventListener("click", () => clearGrid())

