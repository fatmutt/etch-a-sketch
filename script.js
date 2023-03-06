// div creation in grid

const board = document.querySelector('#board');

createGrid = gridNumber => {
    if (gridNumber === 'undefined') {
        gridNumber = 16;
    } else gridNumber = gridNumber;

    let gridSize = gridNumber * gridNumber;

    for(i=0; i<gridSize; i++) {
        let square = document.createElement('div');
        square.className = ('box');
        board.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        board.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        board.appendChild(square);

        square.addEventListener('mouseover', function() {
            square.className = 'color';
                document.getElementsByClassName('color');
        });   
    } 
};

// div deletion before new grid is made
function divDel() {
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
};

createGrid(16);

// button for resizing grid

const resizeButton = document.querySelector('#size');

resizeButton.addEventListener('click', function(){
    
    divDel();
    let value = prompt('Enter Size Less Than 100: ');
    if (typeof value === 'undefined') {
        alert('Please Enter a Value');
    }if (value>100 || value<=0) {
        alert('Please enter a value between 100 and 0');
    }
    
    createGrid(value);  
});

