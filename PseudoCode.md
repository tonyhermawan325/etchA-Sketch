- divSize

createDiv(rowSize){
    - create divRow
    - create divElement
    - for loop row (iteration based on divSize){
        - create new div and assign to divRow
        - add divRow to divRow class
        - set attribut id/data-row = divRow($row)
        - append to #Container
        for loop col (iteration based on divSize){
            create new div and assign to divElement
            add divElement to divElement class
            set attribute id/data-col = divElement($row,col)
            append to data-row = divRow($row)
        }
    }
}