const container = document.querySelector("#container");
const buttonGridChange = document.querySelector("#grid-button");
const gridSquare = document.createElement("div");
const rainbowButton = document.querySelector("#rainbow-button");
const grayscaleButton = document.querySelector("#grayscale-button");
let gridSize = null;
let enableRainbow = false;
let enableGrayscale = false;
rainbowButton.addEventListener("click", rainbowColor);
grayscaleButton.addEventListener("click", grayscaleColor);

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

function randomNumberGenerator(max) {
  return Math.floor(Math.random() * max) + 1;
}

//THIS IS WORKING WOOOOOO!

function rainbowColor() {
  enableGrayscale = false;
  enableRainbow = true;
  let array = document.querySelectorAll(".element");
  for (i of array) {
    i.addEventListener("mouseover", function () {
      if (enableRainbow === true && enableGrayscale === false) {
        let x = randomNumberGenerator(255);
        let y = randomNumberGenerator(255);
        let z = randomNumberGenerator(255);
        this.style.backgroundColor = `rgb(${x}, ${z}, ${y})`;
        this.style.transition = "500ms";
      } else {
        return;
      }
    });
  }
}

let array = document.querySelectorAll(".element");

function grayscaleColor() {
  enableGrayscale = true;
  enableRainbow = false;
  let array = document.querySelectorAll(".element");
  for (i of array) {
    let x = 0;
    i.addEventListener("mouseover", function () {
      if (enableRainbow === false && enableGrayscale === true) {
        this.x;
        this.style.backgroundColor = "rgb(0, 0, 0, " + (x += 0.1) + ")";
      } else {
        return;
      }
    });
  }
}
