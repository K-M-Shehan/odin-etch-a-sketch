const containerDiv = document.querySelector("#container");
const sizeBtn = document.querySelector("#size-btn");
const clearBtn = document.querySelector("#clear-btn");

let numOfCells = 16;
const limit = 100;

function randomColor() {
  min = 0;
  max = 255;

  return Math.floor(Math.random() * (max - min + 1) + min); // gives a number between 0-255 inclusive
}

function drawGrid(cells) {
  let grid = cells * cells;

  for (let i = 0; i < grid; i++) {
    const div = document.createElement("div");

    div.setAttribute("id", "cell");
    div.style.setProperty("--colored", "0");  // not colored yet
    div.style.flex = "0 0 " + (100 / numOfCells) + "%"; // gets the particular column size

    containerDiv.appendChild(div);

    div.addEventListener("mouseover", () => {
      if (div.style.getPropertyValue("--colored").trim() != 1) {  // only colors if cell is not colored
        div.style.backgroundColor = "rgb(" + randomColor() + "," + randomColor() + "," + randomColor() + ")"; // random color for each cell
        div.style.opacity = "0.1";  // default opacity for a cell
        div.style.setProperty("--colored", "1"); // set to 1 as its colored
      }
      else if (div.style.getPropertyValue("--colored").trim() == 1 && div.style.opacity != 1) {
        let opacity = parseFloat(div.style.opacity);
        div.style.opacity = (opacity + 0.1).toFixed(1); // increments opacity, therefore darkens color
      }
    })
  } 
}

function removeGrid(cells) {
  let grid = cells * cells;

  for (let i = 0; i < grid; i++) {
    containerDiv.removeChild(document.querySelector("#cell"));
  } 
}

drawGrid(numOfCells); // default grid that is drawn

sizeBtn.addEventListener("click", () => {
  let prevNumOfCells = numOfCells;

  do {
    numOfCells = prompt("Enter new size (size x size)\nRange: 1 - 100");
  } while (numOfCells > limit && numOfCells > 0); // user can only enter size in range 1 - 100

  if(numOfCells != null) {
    removeGrid(prevNumOfCells);
    drawGrid(numOfCells);
  }
})

clearBtn.addEventListener("click", () => {
  removeGrid(numOfCells);
  drawGrid(numOfCells);
})
