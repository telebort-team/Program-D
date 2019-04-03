// Link your CSS and JS files to HTML

/*
==================================================
1. Select body and save as variable body
2. Select all div with class pane and save as variable panes
3. Select refresh button with id and save as variable refresh
==================================================
*/




/*
==================================================
1. Call function createColor() to create a list of colors
2. Save them as variable colors
==================================================
*/


/*
==================================================
1. Call function selectColor() to select a color to act as the answer
2. Save it as variable selectedColor
==================================================
*/


/*
==================================================
1. Set #color text color to selected color
2. Set #rgb text content to selected color, and make it uppercase
==================================================
*/



/*
==================================================
1. Add three event listeners to each pane
2. Program mouseover event
3. Program mouseout event
4. Program click event
==================================================
*/














/*
==================================================
1. Add click event listener to refresh button
2. Reset all colors with function createColor()
3. Reset selectedColor with function selectColor()
4. Set the #color text color to new selected color
5. Set the #rgb text content to new selected color, and make it uppercase
6. Reset body background color to mintcream
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
        /*
        ==================================================
        1. Declare three variables with name r, g, b
        2. Each initialize to a random value from 0 to 255 with the function getRandom()
        ==================================================
        */




        /*
        ==================================================
        Concatenate and append (push) the new color into array colors
        ==================================================
        */

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