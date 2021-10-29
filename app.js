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
    console.log(`${row}`);
    for(let col = 0; col < divNumber; col++){
        paragraph = document.createElement('p');
        paragraph.textContent = `${row}, ${col}`;
        div = document.createElement('div');
        div.setAttribute("data-rowCol", `${row},${col}`);
        div.classList.add("divElement");
        divRow.appendChild(div);
        }
    
}


const divEl = document.querySelectorAll(".divElement");
divEl.forEach(function(){
    divEl.addEventListener("mouseover", function(event){
        event.target.style.color = "crimson";
    })
})




/**
    
 * */
