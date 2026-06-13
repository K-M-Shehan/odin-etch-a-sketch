const containerDiv = document.querySelector("#container");
const button = document.querySelector("#size-btn");

let numOfCells = 16;
const limit = 100;

function drawGrid(cells) {
  let grid = cells * cells;

  for (let i = 0; i < grid; i++) {
    const div = document.createElement("div");
    div.setAttribute("id", "cell");
    div.style.flex = "0 0 " + (100 / numOfCells) + "%"; // gets the particular column size
    containerDiv.appendChild(div);
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
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

button.addEventListener("click", () => {
  removeGrid(numOfCells);
  do {
    numOfCells = prompt("Enter new size (size x size)");
  } while (numOfCells > limit); // user can only enter size smaller than or equal to 100
  drawGrid(numOfCells);
})
