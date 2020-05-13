/*
==================================================
Get all necessary DOM:
Part 1
1. body with getElementsByTagName
2. #questionText with querySelector
3. .choice with querySelectorAll

Part 2
4. #timeText with getElementById
5. #scoreText with getElementById
6. #errorText with getElementById
7. #accText with getElementById
==================================================
*/




/*
==================================================
Part 1
1. Create a variable isGame and set it to 0
2. Create two variables question and correctAns
3. Create a variable ans as array and set it to [0, 0, 0, 0] 

Part 2
4. Create a constant gameTime and set it to 30 seconds
5. Create a variable playTime and set it to gameTime
6. Create a variable myTime
7. Create three variables score, errNum and acc
8. Create a variable isDone and set it to false
==================================================
*/




/*
==================================================
Attach keydown event handler to body element (modify from Colour Battle Project):
**Part 1**
1. If the key is not equal to Space, return from the handler function
2. Call newGame function to display the screen

**Part 2**
3. If the isGame variable is equal to 2, return from the handler function
4. If the isGame variable is equal to 0:
    - set the isGame variable to 1
    - set the score to 0
    - set errorNum to 0
    - set value of scoreText to score
    - set value of errorText to errorNum
    - call for count function to counting down
==================================================
*/




/*
==================================================
Define the newGame function: (modify from Colour Battle Project)
**Part 1**
1. Set the background color of body to white
2. Create new question with createQuestion function
3. Create four answers as choices with createChoices function
4. Display the question using text content of questionText
5. Call attachEvents function to enable the events on mouse
**Part 2**
6. Set isDone to false
==================================================
*/





/* createQuestion function (modify from Math Quiz project)*/
function createQuestion() {
    var types = ["+","-","*"];
    var choosenType;
    var num1, num2;

    choosenType = types[Math.floor(Math.random()*3)]
    num1 = Math.round(Math.random()*10);
    num2 = Math.round(Math.random()*10);
    if (num2>num1) {
        nums = [num1,num2];
        num1 = nums[1];
        num2 = nums[0];
    }
    question = num1 + " " + choosenType + " " +  num2;

    if (choosenType === "+") {
        correctAns = num1 + num2;
    }
    else if (choosenType === "-") {
        correctAns = num1 - num2;
    }
    else if (choosenType === "*") {
        correctAns = num1 * num2;
    }
    else {}
}

/* createChoices function */
function createChoices() {
    for (var i=0; i<4;i++) {
        do {
            ans[i] = correctAns + Math.round(Math.random()*10) - Math.round(Math.random()*10);
        }while (ans[i] == correctAns || ans[i] == ans[(i+1)%4] || ans[i] == ans[(i+2)%4] || ans[i] == ans[(i+3)%4])
    }
    var choosen = Math.floor(Math.random()*4);
    ans[choosen] = correctAns;
    choices.forEach(function(choice,i){
        choice.textContent = ans[i];
    })
}
/*
==================================================
Define the attachEvents function (modify from Colour Battle Project):
1. For each choice in the list choices:
**Part 1**
    - attach mouseover event
    Set each choice with color "rgb(0, 128, 255)"
    - attach mouseout event
    Set each choice with color back to white
    - attach click event
    If correct, then background color to green
**Part 2**
- attach click event
    If isDone is true, return from the handler function
    If correct, score increase by 1, set isDone to true
    If wrong, error increase by 1
==================================================
*/




/*
==================================================
Define count function (get from Typing Master Project)
1. Use window.setInterval to set up a 1 second fixed interval function call
2. Store the handler to variable myTime
    - if playTime is less than or equal to 0
    - call function stopGame
    - else decrease the playTime by 1
    - set the value of #timeText to playTime
==================================================
*/


/*
==================================================
Define stopGame function (modify from Typing Master Project):
1. Detach choices mouseover, mouseout and click events using forEach iteration.
2. Clear the time interval handler
3. Set isGame to 2
4. Calculate the accuracy and display it to user
5. Set the background color to red

==================================================
*/



