const container = document.querySelector("#container");
const buttonGridChange = document.querySelector('button');
let gridSize = null;

buttonGridChange.addEventListener('click', () => {
  gridSize = prompt('Enter the size of the grid');
  if (gridSize > 100) {
    gridSize = prompt(`Don't enter a value above 100`);
  }
  makeGrid();
});

function makeGrid() {
  container.innerHTML = '';
  for (i = 0; i < gridSize * gridSize; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.setAttribute('id', 'element');
    //gridSquare.textContent = `${i}`;
    container.appendChild(gridSquare);
  }
}

