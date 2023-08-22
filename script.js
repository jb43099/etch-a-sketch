// GLOBAL VARIABLES

const container = document.querySelector('.grid-container');
const sizeEl = document.querySelector('.size');
const color = document.querySelector('.color');
const clearBtn = document.querySelector('.reset-button');
const eraserBtn = document.querySelector('.eraser-button');
const gridBtn = document.querySelector('.grid-button');
let size = +sizeEl.value;
let mousedown = false;
let prevColor;


// FUNCTIONS

function makeGrid(size) {
    container.style.setProperty('--size', size)
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        container.appendChild(div);
        draw(div);
    }
}

function draw(div) {
    div.addEventListener('mouseover', () => {
        if (!mousedown) return;
        div.style.backgroundColor = color.value;
    })
    div.addEventListener('mousedown', () => {
        div.style.backgroundColor = color.value;
    })
}

function clearGrid() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.style.backgroundColor = '#eee')
}

function getEraser() {
    if (color.value == '#eeeeee') {
        color.value = prevColor;
        prevColor = color.value;
        container.style.cursor = 'cell'
        eraserBtn.style.boxShadow = `none`
        eraserBtn.style.backgroundColor = '#aaa'
        grid.style.backgroundColorHover = '#111'
    } else {
        prevColor = color.value;
        eraserBtn.style.boxShadow = `${prevColor} 4px 5px`
        color.value = '#eeeeee'
        container.style.cursor = 'crosshair'
        eraserBtn.style.backgroundColor = '#fff'
    }
    console.log(prevColor);

}


function toggleGrid() {
    container.classList.toggle('grid');
}

// EVENT LISTENERS , FUNCTION CALLS

makeGrid(16);
clearBtn.addEventListener('click', clearGrid);
eraserBtn.addEventListener('click', getEraser);
gridBtn.addEventListener('click', toggleGrid);

sizeEl.addEventListener('change', function () {
    if (sizeEl.value > 100) {
        alert('Choose a number smaller than 100.')
    } else {
        container.innerHTML = '';
        size = sizeEl.value;
        makeGrid(size)
    }

});

window.addEventListener('mousedown', function () {
    mousedown = true
});
window.addEventListener('mouseup', function () {
    mousedown = false
});

