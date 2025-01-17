//Add event on the html button to avoid global variables pollution
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('.start');
    button.addEventListener('click', ()=>generateGrid(16));
    const gridButton = document.querySelector('.gridSize');
    gridButton.addEventListener('click', ()=>changeGridSize())
});

function generateGrid(size)
{
    // get css data to adjust grid size accordingly
    const contentBox = document.querySelector('.content');
    contentBox.textContent='';
    const drawingBoard = document.createElement('div');
    drawingBoard.classList.add('content-box');
    contentBox.appendChild(drawingBoard);

        for(let column=0;column<size;column++)
        {
            for(let row=0;row<size;row++)
            {
                const box = document.createElement('div');
                box.classList='box-style';
                box.style.height=480/size + `px`;
                box.style.width=480/size + `px`;
                drawingBoard.appendChild(box);
            }
        }
        drawingBoard.addEventListener('click', ()=>  drawGrid());
}

function drawGrid(){
    const drawingBoard =document.querySelector('.content-box')
    const createdBoxes = document.querySelectorAll('.box-style');
    createdBoxes.forEach(box =>{
        box.addEventListener('mouseover', ()=>{
            box.classList.add('hovered');
        });
    });
    drawingBoard.addEventListener('click', ()=>{
        createdBoxes.forEach(box =>{
            box.removeEventListener('mouseover', ()=>{});
        });
    });
}

function changeGridSize(){
    let keepGoing=true;
    let size=0;
    while(keepGoing)
    {
        size = prompt('Choose your grid size (maximum 100, minimum 2)');
        if(size>100||size<1)
            alert('Less than 100 please!');
        else {
            generateGrid(size);
            keepGoing=false;
        }
    }
}