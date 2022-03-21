const colorInput = document.querySelector("#color");
const sketchtGridContainer = document.querySelector(".sketch-grid");

function getInputColor() {
    console.log(this.value);
}
function calcGridBoxHeight() {
    return sketchtGridContainer.scrollHeight / 16;
}
function calcGridBoxWidth() {
    return sketchtGridContainer.scrollWidth / 16;
}
function fillGrid() {
    for (let i = 0; i < 256; i++){
        console.log(i);
        // const suffix = "px"
        const gridItem = document.createElement("div");
        // gridItem.style.width = calcGridBoxWidth() + suffix;
        // gridItem.style.height = calcGridBoxHeight() + suffix;
        gridItem.classList += "grid";
        sketchtGridContainer.appendChild(gridItem);       
    }
}

// function updateGridBoxSize() {

//     const gridBoxes = document.querySelectorAll(".grid");
//     const suffix = "px";
//     gridBoxes.forEach((gridBox) => {
//         gridBox.style.width = calcGridBoxHeight() + suffix;
//         gridBox.style.height = calcGridBoxWidth() + suffix;
//     })
// }

fillGrid();
updateGridBoxSize();
colorInput.addEventListener("change", getInputColor);
//document.addEventListener("resize", updateGridBoxSize());

