// Link your JS files to HTML

/*
==================================================
**Part 1**
Create variable: isGame to keep track the overall game mode, initialize it to 0
Create variable: colors to store all colors created
Create variable: selectedColor to store the answer
**Part 2**
Create a constant: gamePoint to store the winning score of 10
Create variable: score to store the user's score
Create variable: errorNum to store the number of error
Create variable: isDone to keep track the current game status, initialize it to false
Create variables: startTime and endTime, to store the game starting and ending time
==================================================
*/







/*
==================================================
Get DOM:
**Part 1**
- body with querySelector
- all .pane with querySelectorAll
- #rgbText with querySelector
**Part 2**
- #scoreText with getElementById
- #errorText with getElementById
- #timeText with getElementById
==================================================
*/







/*
==================================================
Attach keydown event handler to body element:
**Part 1**
1. Call newGame function to display the screen
2. If the key is not equal to Space, return from the handler function
3. If the isGame variable is equal to 2, return from the handler function
4. If the isGame variable is equal to 0:
    - set the isGame variable to 1
**Part 2**
5. If the isGame variable is equal to 0:
    - set the score to 0
    - set errorNum to 0
    - set value of scoreText to score
    - set value of errorText to errorNum
    - record the current time in startTime with performance.now()
==================================================
*/











/*
==================================================
Define the newGame function:
**Part 1**
1. Set the background of body to white
2. Create new colors with createColor function
3. Select a new answer with selectColor function
4. Set the #rgbText font color to the same as selectedColor
5. Set the #rgbText text content to the same as selectedColor, make them uppercase
6. Call attachEvents function to enable the events on mouse
**Part 2**
7. Set isDone to false
==================================================
*/








/* createColor function */
function createColor() {
    for (var i=0; i<8;i++){
        var redNum = Math.floor(Math.random()*256);
        var greenNum = Math.floor(Math.random()*256);
        var blueNum = Math.floor(Math.random()*256);
        colors[i] = "rgb("+ redNum + ", " + greenNum + ", " + blueNum + ")"
    }
}

/* selectColor function */
function selectColor() {
    var choosen = Math.floor(Math.random()*8);
    selectedColor = colors[choosen];
}

/*
==================================================
Define the attachEvents function:
1. For each item in the list panes:
**Part 1**
    - attach mouseover event
    Set each panes with colors
    - attach mouseout event
    Set each panes color back to original
    - attach click event
    If correct, then go to stopGame function
**Part 2**
- attach click event
    If isDone is true, return from the handler function
    If correct, score increase by 1, set isDone to true
        If game point is reach, go to stopGame function
    If wrong, score decrease by 1 and error increase by 1
==================================================
*/










/*
==================================================
Define the stopGame function:
**Part 1**
1. For each item in the list panes:
    - set mouseover event to null
    - set mouseout event to null
    - set click event to null
**Part 2**
2. Set isGame to 2
3. record the current time in endTime with performance.now()
4. Set timeText to the total time used
==================================================
*/






