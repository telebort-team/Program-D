/*
==================================================
1. Get DOM of #newText
2. Get DOM of #listUl
==================================================
*/



/*
==================================================
Create an empty array named as lists
==================================================
*/


/*
==================================================
With self-executing function, load the initial page view:
1. Get DOM of all li
2. For each item the the array lists:
    - call addItem function to create a todo
    - if the item.isDone if true, add class "done" to the element
==================================================
*/










/*
==================================================
Use chaining method, add click event handler to #addButton:
1. Empty the value in #newText
2. Toggle the class .hide on #newText
3. If #newText is visible, focus to it
==================================================
*/








/*
==================================================
Attach keydown event handler to #newText:
1. If the keystroke is not "Enter", return from the handler
2. Else, save the value in #newText into variable newItem
3. Check if newItem is empty, give alert to user and return from handler
4. Else, call addNewItem function and pass in newItem
5. Reset the value in #newText to empty
==================================================
*/














/*
==================================================
Define addNewItem function:
1. Take in one parameter: text
2. Create an object todo to store the new text and property isDone
3. Push the new todo into array lists
4. Call addItem function to add that todo into HTML display
==================================================
*/










/*
==================================================
Define addItem function:
1. Take in one parameter: text
2. Create a newList variable using template literal to fill in HTML elements
3. Insert the newList variable into listUl at beforeend
==================================================
*/










/*
==================================================
Attach click event handler to listUl:
1. If the user click on text li
    - get the DOM of that li
    - toggle the class .done on that li
    - get the index of parent div of the li with Array.from().indexOf()
    - toggle the isDone property of the corresponding todo object in array lists
2. Else if the user click on delete span
    - get the DOM of that span
    - get the index of parent div of the span with Array.from().indexOf()
    - remove the corresponding todo object in array lists
    - remove the parent div of the span from HTML display
==================================================
*/
listUl.onclick = function (event) {
    if (event.target.matches('li')) {
        var li = event.target.closest('li');
        li.classList.toggle("done");
        var index = Array.from(listUl.children).indexOf(li.parentElement);
        lists[index].isDone = !lists[index].isDone;
        storeValue("lists", lists);
    }
    else if (event.target.matches('span')) {
        var span = event.target.closest('span');
        var index = Array.from(listUl.children).indexOf(span.parentElement);
        lists.splice(index, 1);
        span.parentElement.remove();
        storeValue("lists", lists);
    }
}

// Function to store data into local storage










// Function to retrieve data from local storage







