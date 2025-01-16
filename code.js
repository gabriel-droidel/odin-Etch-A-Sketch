//Add event on the html button to avoid global variables pollution
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('.start');
    button.addEventListener('click', ()=>generateGrid(getData()));
    const gridButton = document.querySelector('.gridSize');
    gridButton.addEventListener('click', ()=>changeGridSize(data))
});

function generateGrid(data)
{
    // get css data to adjust grid size accordingly
    const contentBox = document.querySelector('.content');
    contentBox.textContent='';
    const drawingBoard = document.createElement('div');
    drawingBoard.classList.add('content');
    contentBox.appendChild(drawingBoard);

        for(let column=0;column<data.boxNumber;column++)
        {
            for(let row=0;row<data.boxNumber;row++)
            {
                const box = document.createElement('div');
                box.classList='box-style';
                drawingBoard.appendChild(box);
            }
        }
        drawingBoard.addEventListener('click', ()=>  drawGrid());

        return;
}

function getData()
{
    // Get data from css custom properties 
    // Return object with css properties
    const root = document.documentElement;
    const styles = getComputedStyle(root);
    const boxCount = styles.getPropertyValue('--box-per-row');
    const boxSize = styles.getPropertyValue('--box-size');
    data = {
        boxNumber: boxCount,
        boxSize : boxSize, 
    };
    return data;
}

function drawGrid(){
    const createdBoxes = document.querySelectorAll('.box-style');
    createdBoxes.forEach(box =>{
        box.addEventListener('mouseover', ()=>{
            box.classList.add('hovered');
        });
    });
}

function changeGridSize(data){
    data=getData();
    
}