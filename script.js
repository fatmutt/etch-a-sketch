


/*  div creation in grid */

const board = document.querySelector('#board');

const button = document.querySelector('#clear');

createGrid = gridNumber => {
    if (gridNumber === undefined) {
        gridNumber = 16;
    } else gridNumber = gridNumber;

    let gridSize = gridNumber * gridNumber;
}

for(x=0; x<256; x++) {
    let square = document.createElement('div');
    square.className = "bird";
    document.getElementById('board').appendChild(square).style.border = "thin dashed";

    square.addEventListener('mouseover', function() {
        square.className = 'color';
            document.getElementsByClassName('color');
    });

    
    
}
/* button to clear color from Etch-A-Sketch */

const boxes = Array.from(document.getElementsByClassName('bird'));

clear.addEventListener('click', function() {
    boxes.forEach(bird => {
        bird.classList.remove('color');
    });
})

/* btn.addEventListener('click', function(){
    container.className = 'clear'
        document.getElementbyClassName('clear');
}) */


/* button for resizing grid */
const resizeButton = document.querySelector('#size');

size.addEventListener('click', function(){
    sketch = prompt('Enter Size: ', 16);
});

