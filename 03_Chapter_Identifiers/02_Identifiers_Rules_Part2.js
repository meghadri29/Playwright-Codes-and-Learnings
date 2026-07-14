//Naming Conventions in JavaScript.
//1.Camel Case: In this convention, the first letter of the first word is lowercase, and the first letter of each subsequent word is capitalized. For example: myVariableName, userAge, calculateTotal.
// Its standard for Javascript Variables and Functions.
let userName='Camel Case';
let totalPrice='100';
let isLoggedIn=true;
function getUserInfo() {return "function in camel case"};



//2.Pascal Case: In this convention, the first letter of each word is capitalized. For example: MyVariableName, UserAge, CalculateTotal.
//Standard for Javascript Classes and Constructors.
let UserProfile='Pascal Case';
let ShoppingCart='Pascal Case';
function Person() {return "constructor"};

//3.Snake Case: In this convention, words are separated by an underscore. For example: my_variable_name, user_age, calculate_total.
let user_profile='Snake Case';
let total_price='100';
let is_logged_in='true';

//4.Screaming Snake Case: In this convention, words are separated by an underscore, and all letters are capitalized. For example: MY_VARIABLE_NAME, USER_AGE, CALCULATE_TOTAL.
//Constant variables are usually written in this convention. 
const MAX_VALUE=100;
const API_KEY='123456789';
const DATABASE_URL='https://example.com/database';

//5.Hungarian Notation: In this convention, the variable name is prefixed with a lowercase letter or abbreviation that indicates its type or purpose. For example: strName (string), intAge (integer), arrItems (array).
let strName='Hungarian Notation';
let intAge=25;