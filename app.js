const frame = document.getElementById("container");

frame.addEventListener('mouseover', event => { // listen on the frame for any hover
    let target = event.target; //find the target of the hover
    draw(target); // call the draw function on that element
});

function draw(input){
    input.classList.add("lit");
}
//function that creates grids in html//
function createGrid() {
let input = prompt("Choose a number of spaces for each side!", "");
let spaces = parseInt(input);

for (let i = spaces; i > 0; i--) {
    const container = document.querySelector("#container");

    const row = document.createElement("div");
    row.classList.add("row");
    
    container.appendChild(row);

for (let i = spaces; i > 0; i--) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    row.appendChild(cell);
        }
    } 
}     



createGrid();