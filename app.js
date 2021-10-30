let divNumber = 20;
const containter = document.querySelector("#Container");

for(let row = 0; row < divNumber ; row++){
    let div;
    let divRow;
    let paragraph;
    divRow = document.createElement('div');
    divRow.setAttribute("data-row", `${row}`);
    divRow.classList.add("divRow");
    containter.appendChild(divRow);
    for(let col = 0; col < divNumber; col++){
        paragraph = document.createElement('p');
        paragraph.textContent = `${row}, ${col}`;
        div = document.createElement('div');
        div.setAttribute("data-rowCol", `${row},${col}`);
        div.classList.add("divElement");
        divRow.appendChild(div);
        }
    
}

  function changeColor(e){
    e.target.style.backgroundColor = "blue";
}
const divEls = document.querySelectorAll(".divElement");
let interval;

let mouseIsDown = false;
window.addEventListener("mousedown", function(event){
    mouseIsDown = true;
    console.log(event);
    console.log(mouseIsDown);
});

window.addEventListener("mouseup", function(event){
    mouseIsDown = false;
    console.log(event);
    console.log(mouseIsDown);
});

divEls.forEach(function(divEl){
    divEl.addEventListener("mouseenter", function(event){
        if(mouseIsDown){
            event.target.style.backgroundColor = "blue";
        }
    })
});

