let grid = document.getElementById("grid")
let width = 1 //Number of columns
let height = 1 //Number of rows
let currColor = "transparent"; //Variable that holds the selected color

//Creates a new column, with the same amount of squares as the rest
function addColumn(){
        let col = document.createElement('div')
        col.classList.add('col')
        for(let i = 0;i<height;i++)
        {
        let sq = document.createElement('div')
        sq.classList.add('square')
        col.appendChild(sq)
        }
        grid.appendChild(col)
        width++;
}

//Creates a new row by adding a square to each existing column
function addRow(){
       let cols = grid.querySelectorAll('.col') 
       for(let col of cols)
       {
        let sq = document.createElement('div')
        sq.classList.add('square')
        col.appendChild(sq)
       }
       height++;
}

//An extra function I made to add 32 rows and columns to the canvas
function add32(){
    for(let i = 0;i<32;i++)
    {
        addColumn()
        addRow()
    }
}

//An extra function I made that removes all squares but 1
function removeAll(){
    while(width > 1)
    {
        removeColumn()
    }
    while(height > 1)
    {
        removeRow()
    }
}

//Removes a column element (along with all of its squares)
function removeColumn(){
        if(width>1){
        let rem = grid.lastChild
        rem.parentNode.removeChild(rem)
        width--;}
}

//Removes 1 square element from each column node
function removeRow(){
        if(height>1){
        let cols = grid.querySelectorAll('.col') 
        for(let col of cols)
        {
        let rem = col.lastChild
        rem.parentNode.removeChild(rem)
        }
        height--;}
}

//Sets every square's color to transparent (default)
function clearAll(){
    let squares = grid.querySelectorAll('.square')
    for(let square of squares)
    {
        square.style.backgroundColor = "transparent"
    }
}

//Sets the color of every transparent square to the selected color
function fillUncolored(){
    let squares = grid.querySelectorAll('.square')
    for(let square of squares)
    {
        if(square.style.backgroundColor=="transparent")
        {square.style.backgroundColor=currColor}
    }
}

//Sets the color of all squares to the selected color
function fillAll(){
    let squares = grid.querySelectorAll('.square')
    for(let square of squares)
    {
        square.style.backgroundColor=currColor
    }
}

//Sets the currColor variable to the color selected in the 'select' element
let colorselect = document.querySelector('select')
colorselect.addEventListener('change',event=>{
    currColor = colorselect.value;
    event.preventDefault()
    console.log(currColor)
})


//Sets the color of the square that is clicked on to currColor (the selected color)
grid.addEventListener('mousedown',event=>{
    
    if(event.target.classList=="square")
        {event.target.style.backgroundColor = currColor}
    event.preventDefault()//Squares occasionally drag without this

})

//Sets the color of all squares that are dragged over to currColor
grid.addEventListener('mouseover',event=>{
    
    if(event.target.classList=="square" && event.buttons==1)
        {event.target.style.backgroundColor = currColor}

})


