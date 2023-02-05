


/*  div creation in grid */
for(x=0; x<256; x++) {
    let board = document.createElement('div');
    board.className = "bird";
    document.getElementById('board').appendChild(board);
    
    board.addEventListener('mouseover', function() {
        board.className = 'color';
            document.getElementsByClassName('color');
    })
}

const board = document.querySelector('#board');

/* board.addEventListener('mouseover'), function() {
    document.getElementByClassName('bird')
        document.board.style.backgroundColor = 'red';
} */

/* board.addEventListener('mouseover', e =>{
    console.log(e)0
}) */

