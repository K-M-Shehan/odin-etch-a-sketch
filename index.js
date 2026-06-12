const containerDiv = document.querySelector("#container");

let numOfCells = 16;
let grid = numOfCells * numOfCells;

for (let i = 0; i < grid; i++) {
  const div = document.createElement("div");
  div.setAttribute("id", "cell");
  div.style.flex = "0 0 " + (100 / numOfCells) + "%"; // gets the particular column size
  containerDiv.appendChild(div);
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "black";
  })
}
