// // Include Faker.js into your project

/*
==================================================
Get all necessary DOM:
Part 1
1. body with getElementsByTagName
2. .key with querySelectorAll
3. #yetSpan with getElementById
4. #doneSpan with getElementById
Part 2
5. #timeText with getElementById
6. #apmText with getElementById
7. #errorText with getElementById
8. #accText with getElementById
==================================================
*/

/*
==================================================
1. User faker.fake to create a random paragraph and save it as variable ans
2. Set the string ans as text content of #yetSpan
==================================================
*/

/*
==================================================
Part 1
1. Create a variable gameState and set it to 0
2. Create a variable currentIndex and set it 0
3. Create two variables textDone and textYet
Part 2
4. Create a constant gameTime and set it to 60 seconds
5. Create a variable playTime and set it to gameTime
6. Create a variable myTime
7. Create a variable errNum and set it to 0
8. Create two variables apm and acc
==================================================
*/


/*
==================================================
Attach keydown event handler to body:
Part 1
1. For every keydown on an alphabet key
    change the corresponding virtual keyboard background to rgb(0, 123, 255)
Part 2
2. If the gameState is 0:
    - set the gameState to 1
    - set the value of #timeText to variable playTime
    - call count() function to start counting
==================================================
*/


/*
==================================================
Attach keyup event handler to body:
Part 1
1. For every keyup on an alphabet key
    change the corresponding virtual keyboard background to #232323
2. If the pressed key is equal to the current ans character,
    - move the current character to textDone
    - remove the current character from textYet
    - set the #doneSpan text content to textDone
    - set the #yetSpan text content to textYet
    - increase the currentIndex by 1
Part 2
3. Else
    - increase the errNum by 1
    - set the value of #errorText to errNum
4. If currentIndex is equal to the length of ans, call stopGame function
==================================================
*/


/*
==================================================
Define count function
1. Use window.setInterval to set up a 1 second fixed interval function call
2. Store the handler to variable myTime
    - if playTime is less than or equal to 0
    - call function stopGame and return from the handler
    - else decrease the playTime by 1
    - set the value of #timeText to playTime
==================================================
*/


/*
==================================================
Define stopGame function:
1. Clear the time interval handler
2. Set gameState to 2
3. Calculate the apm and display it to user
4. Calculate the accuracy and display it to user
5. Display the number of error
6. Set the #yetSpan font color to red
7. Detach body keydown and keyup events
==================================================
*/
