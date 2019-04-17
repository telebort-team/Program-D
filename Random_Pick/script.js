// Create a list of students in an array
const INITIAL = [
    "Arshanya Parameswaran",
    "Chan Darrel",
    "Chen E-Chen (Khemaka)",
    "Damian Chan Yi Hang",
    "Joshua Yeoh Li Jun",
    "Koay Yi Ren Darin",
    "Kyzer Phneh",
    "Ng Zi Wei",
    "Nicholas Ooi Zi Xun",
    "Poh Xiao Xun",
    "Princeton Yeap Han Ze",
    "Ryan Baliah",
    "Soon Yi Liang",
    "Teoh Tek Xin",
    "Teoh Wei Ke",
    "Elvin Lim Jian Fong",
    "Lee Xian Yao",
    "Lee Xian Zheng",
    "Adrikha Logarajah",
    "Alden Lee Kai Qin",
    "Benjamin Leong Chun Meng",
    "Chesney Cha Su Tian",
    "Ian Cheah Zhang Fung",
    "Leow Chi Zhen",
    "Lim Zhi Xue",
    "Ng He Syuen",
    "Ooi Yi Xuen",
    "Yeoh Chin Cherng",
    "Yeoh Chin Chuen",
];
var lists = [...INITIAL]; // Create a slice of copy

// Constants for display
const LSW = "Let's See Who";
const LIE = "List is empty";

/*
==================================================
1. Use getElementsByTagName to select h1
2. Save it as variable h1
==================================================
*/


/*
==================================================
Function show will create display for list of students
and present the number of students in the list

1. Create a function named as show
2. Create an empty string variable named as text
3. For each item in the array lists, append <li>student name</li> to variable text
4. Insert variable text into innerHTML of element ul
5. Display the number of student in span element with id "stdNum"
==================================================
*/
function show() {






}


/*
==================================================
1. Call function show to display the initial name list
==================================================
*/


/*
==================================================
1. Attach click event handler to pick button, use id selector to select the DOM
2. If the length of lists is empty
    - Alert user with message "List is empty"
    - Then Set the same message to h1
    - Return from the event handler
3. If the length is not empty
    - Create a random number to select one student in the lists, save the number as variable point
    - Save the name of selected student in variable student
    - Display the student's name in h1 text content
    - Remove the student from array lists using lists.splice()
    - Call function show to update the display
==================================================
*/













/*
==================================================
1. Attach click event handler to absent button, use id selector to select the DOM
2. If the text content in h1 is equal to "Let's See Who" or "List is empty"
    - Alert user with message "Not a human"
    - Return from the event handler
3. Else
    - Save the student name in h1 text content as variable student
    - Push the student back into array lists
    - Reset the h1 text content to "Let's See Who"
    - Call function show to update the display
==================================================
*/











/*
==================================================
1. Attach click event handler to reset button, use id selector to select the DOM
2. Reset array lists to INITIAL
3. Reset h1 text content to "Let's See Who"
4. Call function show to update the display
==================================================
*/




