
//button that calls createGrind functions//
// queryselector("button")
// addEventListener click 
// deletes the divs created before
// runs function createGrid


//function that creates grids in html//
function createGrid() {
let input = prompt("Choose a number of spaces for each side!", "");
let spaces = parseInt(input);

for (let i = spaces; i > 0; i--) {
    const grid = document.querySelector('#grid');

    const row = document.createElement('div');
    row.classList.add('row');
    row.textContent = 'div!';
    
    grid.appendChild(row);

for (let i = spaces - 1; i > 0; i--) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = "cell";

    row.appendChild(cell);
        }
    } 
}     



createGrid();
