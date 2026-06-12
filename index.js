const containerDiv = document.querySelector("#container");

let numOfCells = 16;

for (let i = 0; i < numOfCells; i++) {
  const div = document.createElement("div");
  div.setAttribute("id", "cell");
  containerDiv.appendChild(div);
}
