// Link your CSS and JS files to HTML

/*
==================================================
Create a constant: gamePoint to store the winning score of 10
==================================================
*/


/*
==================================================
Create variable: colors to store all colors created
Create variable: selectedColor to store the answer
Create variable: score to store the user's score
Create variable: errorNum to store the number of error
Create variable: isDone to keep track the current game status, initialize it to false
Create variable: isGame to keep track the overall game mode, initialize it to 0
Create variables: startTime and endTime, to store the game starting and ending time
==================================================
*/





/*
==================================================
Get DOM:
- body with querySelector
- all .pane with querySelectorAll
- #scoreText with getElementById
- #errorText with getElementById
- #timeText with getElementById
- #rgbText with querySelector
==================================================
*/







/*
==================================================
Attach keydown event handler to body element:
1. If the key is not equal to Space, return from the handler function
2. If the isGame variable is equal to 2, return from the handler function
3. If the isGame variable is equal to 0:
    - set the isGame variable to 1
    - set the score to 0
    - set errorNum to 0
    - set value of scoreText to score
    - set value of errorText to errorNum
    - set value of timeText to empty
    - call attachEvents function to execute
    - record the current time in startTime with performance.now()
4. Call newGame function to display the screen
==================================================
*/


















/*
==================================================
Define the attachEvents function:
1. For each item in the list panes:
    - attach mouseover event
    - attach mouseout event
    - attach click event
==================================================
*/


































/*
==================================================
Define the newGame function:
1. Set the background of body to white
2. Create new colors with createColor function
3. Select a new answer with selectColor function
4. Set the #rgbText font color to the same as selectedColor
5. Set the #rgbText text content to the same as selectedColor, make them uppercase
6. Set isDone to false
==================================================
*/









/*
==================================================
Define the stopGame function:
1. Record the current time in endTime with performance.now()
2. Calculate the usedTime by subtracting startTime from endTime and divide by 1000
3. Set the value of timeText to usedTime in two decimal places
4. For each item in the list panes:
    - set the background color to #232323
    - detach all event handlers
5. Set the #rgbText font clor to rgb(33, 37, 41)
6. Set the #rgbText text content to "Done"
7. Set the isGame variable to 2
==================================================
*/

















/*
==================================================
Function to create a list of colors given a number
Return an array of string, where each string is a color code of rgb(red, green, blue)
==================================================
*/
function createColor(number) {
    var colors = [];

    for (var i = 0; i < number; i++) {
        var r = getRandom();
        var g = getRandom();
        var b = getRandom();
        colors.push("rgb(" + r + ", " + g + ", " + b + ")");
    }

    return colors;
}

// Function to select one color from list of colors
function selectColor() {
    index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

// Function to generate random integer value between 0 to 255
function getRandom() {
    return Math.floor(Math.random() * 256);
}