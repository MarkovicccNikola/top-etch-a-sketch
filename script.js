const container = document.querySelector("#container");
const buttonGridChange = document.querySelector("button");
const gridSquare = document.createElement("div");
let gridSize = null;

function makeInitialGrid() {
  let defaultSize = 800 / 4;
  for (i = 0; i < 4 * 4; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.style.width = defaultSize + "px";
    gridSquare.style.height = defaultSize + "px";
    gridSquare.setAttribute("class", "element");
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
    gridSquare.setAttribute("class", "element");
    //gridSquare.textContent = `${i}`;
    container.appendChild(gridSquare);
  }
}

// Only works for 10 events. Once x = 0 it stops.
/* container.addEventListener("mouseover", (event) => {
  let x = 1;
  event.target.style.backgroundColor = "rgb(0, 0, 0, " + (x -= 0.1) + ")";
});
*/

/*
function randomNumberGenerator(max) {
  return Math.floor(Math.random() * max) + 1;
}

let x = randomNumberGenerator(255);
let y = randomNumberGenerator(255);
let z = randomNumberGenerator(255);
container.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = `rgb(${x}, ${z}, ${y})`;
});
*/

function randomNumberGenerator(max) {
  return Math.floor(Math.random() * max) + 1;
}

let array = document.querySelectorAll(".element");
function changeColorHover() {
  let array = document.querySelectorAll(".element");
  for (i of array) {
    i.addEventListener("mouseover", function () {
      let x = randomNumberGenerator(255);
      let y = randomNumberGenerator(255);
      let z = randomNumberGenerator(255);
      this.style.backgroundColor = `rgb(${x}, ${z}, ${y})`;
      this.style.transition = "500ms";
    });
  }
}
changeColorHover();
