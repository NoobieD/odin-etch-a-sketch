const DEF_GRID_SIZE=16;
const DEF_COLOR = '#333333';

let currentSize=DEF_GRID_SIZE;
let currentColor = DEF_COLOR;

let setCurrentSize=(size)=>{
    currentSize=size;
}

let setCurrentColor=(color)=>{
    currentColor=color;
}

const gridSize=document.getElementById("gridSize");
const gridSizeValue=document.getElementById("gridSizeValue");
const grid=document.getElementById("grid");
const colorPicker=document.getElementById("colorPicker");
const resetBtn=document.getElementById("resetBtn");


gridSize.onchange=(e)=>changeSize(e.target.value);
colorPicker.oninput=(e)=>setCurrentColor(e.target.value);
resetBtn.onclick=()=>reloadGrid();

let changeSize=(size)=>{
    changeGridSizeValue(size);
    setCurrentSize(size);
    reloadGrid();
}

let reloadGrid=()=>{
    clearGrid();
    setupGrid(currentSize);
}

let changeGridSizeValue=(size)=>{
    gridSizeValue.textContent=`${size} x ${size}`;
}

let clearGrid=()=>{
    grid.innerHTML='';
}

let setupGrid=(size)=>{
    grid.style.gridTemplateColumns=`repeat(${size},1fr)`;
    grid.style.gridTemplateRows=`repeat(${size},1fr)`;

    for(let i=1; i<size*size;i++){
        const gridElement=document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mousedown',changeColor);
        gridElement.addEventListener('mouseover',changeColor);
        grid.appendChild(gridElement);
    }
}

let changeColor=(e)=>{
        e.target.style.backgroundColor=currentColor;
}

window.onload=()=>{
    setupGrid(DEF_GRID_SIZE);

}
