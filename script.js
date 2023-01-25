const container = document.querySelector("#container");
const buttonGridChange = document.querySelector("button");
let gridSize = null;

function makeInitialGrid() {
  let defaultSize = 800 / 4;
  for (i = 0; i < 4 * 4; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.style.width = defaultSize + "px";
    gridSquare.style.height = defaultSize + "px";
    gridSquare.setAttribute("id", "element");
    container.appendChild(gridSquare);
  }
}

makeInitialGrid();

buttonGridChange.addEventListener("click", () => {
  gridSize = prompt("Enter the size of the grid");
  if (gridSize > 100) {
    gridSize = prompt(`Don't enter a value above 100`);
  }
  makeGrid();
});

//I could also get the value of width and height of the container if I am using %s and then use that instead of hard coded size as I did here.

function makeGrid() {
  container.innerHTML = "";
  let newSize = 800 / gridSize;
  for (i = 0; i < gridSize * gridSize; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.style.width = newSize + "px";
    gridSquare.style.height = newSize + "px";
    gridSquare.setAttribute("id", "element");
    //gridSquare.textContent = `${i}`;
    container.appendChild(gridSquare);
  }
}
