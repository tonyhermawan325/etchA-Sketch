let divNumber = 4;
const containter = document.querySelector("#Container");

for(let row = 0; row < divNumber ; row++){
    let div;
    let divRow;
    divRow = document.createElement('div');
    divRow.classList.add("divRow");
    containter.appendChild(divRow);
    console.log(divRow);
}

/**
    for(let col = 0; row < divNumber; col++){
    div = document.createElement('div');
    div.
    }
 * */
