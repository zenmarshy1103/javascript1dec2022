//< ---------- Javascipt Foundamentals PART 1 ---------- >

//          ---------- Values and Variables ----------
// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");

// let firstName = "Jonas";
// console.log(firstName);

// ----- Assignment -----
// --- lecture: Values and Variables ---

/*let country = "Taiwan";
let contenent = "Asia"
let population = 600000;

console.log("Country:", country);
console.log("contenant:", contenent);
console.log("population:", population);
*/

// this is a comment
/* This is muli-line comment*/

//          -------------------------------------------


//          ---------- Data Types ----------

/*true;
console.log(true);

//--- Storing  boolean in variables ---

let javascriptIsFun = true;
console.log(javascriptIsFun);

//--- Typeof Operator ---
//Shows the type of the variable

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 11);
console.log(typeof "Jason");

//--- Dynamic Typing ---
// Can easily change the type of the value that is held by the variable
// In another word: we can change the value any time after it has been asigned

javascriptIsFun = "yes";
console.log(javascriptIsFun, typeof javascriptIsFun);

//--- undefined data type ---
// A value taken by a variable that is not yet defined
// In another word: Empty value

let year;
console.log(year, typeof year);

year = 1991;
console.log(year, typeof year);

//--- null ---
// Javasript will say the type of null is an object. This is a bug in Javascript, never corrected.

console.log(null, typeof null);
*/

//         ------------------------------

//         ---------- let, const and var ----------
/*// let can be used to declare variables, const an var can be used too.
// var: is an old way to declare variable.

// let: value asigned with let can be re-assigned later in the program, or can be mutated. Can hold empty value.
let age = 30;
age = 31;

// const: a value assigned with const cannot be changed or reassign or mutated throughout the whole program and cannot hold empty value.
const birthyear = 1989;

// var: should be avoided, as this is a legacy way. Old way of declaring a variale.
var job = "programmer";
job = "teacher;"
//         ----------------------------------------
*/

//          ---------- Basic Operators ----------
// Operator allows us to transform value or combine multiple value.
// ie mathematic, comparsion, assigning etc

/*//--- Subtraction ---
let yearNow = 2022;
const ageJaon = yearNow - 1989;
const ageFaye = yearNow - 1993;
console.log(ageFaye, ageJaon);

//--- Muliplication, Division, To the power---
console.log(ageJaon * 2, ageFaye / 10, 2 ** 3)
// 2**3 = 2x2x2 (2 to the power of 3)

//-- addition and concaternate(join) strings ---
const firstName = "Jason";
const lastName = "Liu";
console.log(firstName + ' ' + lastName);

//--- Assignment Operator ---
// Assisning value to variable.
let x = 10 + 5;

x += 10; // x = x + 10
x *= 4;  // x = x * 4
x /= 4; // x = x / 4

x++; //x = x + 1
x--; //x = x - 1

console.log(x);

//--- Comparision operator ---
//Used to produce Boolean Values

console.log(ageJaon > ageFaye); // true; jason is 33 faye is 29
// there are more:
// >, < , >=, <=

console.log(ageFaye >= 18); // greater and equal to 18

//Good Practice is to store boolean values to a variable
const isFullAge = ageFaye >= 18;
//          -------------------------------------
*/


//          ---------- Operator Precedence ----------
// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
//subtraction and addition has highter precedence than comparison.

/*let yearNow = 2022;
const ageJason = yearNow - 1989;
const ageFaye = yearNow - 1993;

console.log(yearNow - 1991 > yearNow - 2018);

let x, y;
x = y = 25 - 10 - 5; //operation (higher precedence)
// 1. 25 - 10 - 5 (= 10) (left to right)
// 2.  y = 10 , x = 10  (right to left)
console.log(x, y);

const averageAge = (ageJason + ageFaye) / 2;
console.log(ageJason, ageFaye)



//          -----------------------------------------
*/

//          ---------- Coding Challenge #1 ---------- 

/*JavaScript Fundamentals – Part 1
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

GOOD LUCK �
*/

/*let massMark, heightMark, massJohn, heightJohn;
massMark = 78;
heightMark = 1.69;
massJohn = 92;
heightJohn = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

let markHigherBMI = bmiMark > bmiJohn;

console.log("Mark's BMI: ", bmiMark, "John's BMI: ", bmiJohn, "Is Mark's BMI highter than John's: ", markHigherBMI);


//          ----------------------------------------
*/

//          ---------- Strings and Template Literals ----------

/*const firstName = "Jason";
const job = "Test and Validation Engineer";
const birthYear = 1989;
const currentYear = 2022;

//--- Standard string concateration ---
const jason = "I'm " + firstName + ', a ' + (currentYear - birthYear) + " yaers old " + job + "!";
console.log(jason);

//--- Template Literals ---
// `` is used, this tells Javascript that we are writing a template string
// ${variableName} placeholder is used for inserting the variable inside the {}
const jasonNew = `I'm ${firstName} a ${currentYear - birthYear} years old ${job}!`;
console.log(jasonNew);

//--- Backticks ---
// Can be used for regular strings.
console.log(`just a regular string.`);

//--- Multi-line Strings ---
console.log("string with \n\
multiple \n\
lines.")

//multi-line strings with backticks ---
console.log(`string with
multiple
lines.`)
//          ---------------------------------------------------
*/

//          ---------- Taking Decisions IF / ELSE Statements ----------

//-- Example 1 ---
// Write a program which checks if a person ia allowed to start taking a driving license test.

//--- if / else control structure
// Not all the code is execute the code execution is controlled by the if / else statement. Ie either the if statement is executed or the else statment. But not both

// if() {
//
// } else {
//    
// }

/*const age = 14;

if (age >= 15) {
    console.log(`Jason can start driver license 🚗`);
} else {
    const yearLeft = 15 - age;
    console.log(`Jason cannot start driver license 👎 wait for ${yearLeft} year(s)`);
}

const birthYear = 1989;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
//          -----------------------------------------------------------
*/

//          ---------- Coding Challenge #2 ----------
/*Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:
1. Print a nice output to the console,saying who has the higher BMI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement 😉
GOOD LUCK 😀
*/

/*let massMark, heightMark, massJohn, heightJohn;
massMark = 78;
heightMark = 1.69;
massJohn = 92;
heightJohn = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
}

//          ---------------------------------------------
*/

//          ---------- Type Conversion and Coercion ----------
// TYPE CONVERSION: Manually converting one type to another type.
// ie converting a string to a number or number to boolean etc
//
// TYPE COERCION: When Javascript automatically converts type behind the scenes for us. Completely hidden from us.

//----- Type Conversion -----
//--- Converting a number in Sting to a Number Type ---
/*const inputYear = '1991'; // 1991 is a string needs to be converted to number first before doing arithmetic operations.
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

//---Converting string to number, output will be NaN (Not a Number (invalid number))
console.log(Number('jason'));

//--- Conveting Number to a string ---
console.log(String(23));

//--- Converting to Boolean ---
// Will be covered in another lecture.

//----- Type Coercion -----
// Happens when an operator is dealing with two values that have different types. Javascript will, behind the scene convert one type to match the other type.

//--- Coercion number to string ---
console.log('I am ' + 23 + ' years old');

//--- Coercion string to number ---
console.log('23' - '10' - 3);
console.log('33' * '3');
console.log('33' * 3);
console.log(33 / '3');
console.log('33' / '3');

// [Note] using +, Javascript will just concaterate string and number together
console.log('23' + '10' + 3);

//--- Guess what n is before running this to see the answer.
let n = '1' + 1;
n = n - 1;
console.log(n);
//          --------------------------------------------------
*/

//         ---------- Truthy and Falsy Value ----------
/*
Falsy Value - A value that is not false but will be false when we convert it to boolean type. Types of falsy values:
              1. 0
              2. Empty string ' '
              3. undefined
              4. null
              5. NaN

Truthy Value - Value that can be converted to truth.
Types of values value:
    1. Values that are not zero
    2. Not an empty string
    3. defined values
    4. not null
    5. A number
*/

/*console.log(Boolean(0));  // Falsy Value
console.log(Boolean(undefined)); // Falsy
console.log(Boolean("Jason")); // Truthy
console.log(Boolean({})); //Truthy - Empty Object
console.log(Boolean("")); // Falsy

//--- Type Coercion: Truthy and Falsy values in Boolean Control Structure ---
const money = 0;
if (money) {    // Javascript will automatically convert a variable to a boolean if used in a boolean operator. hense Boolean(0) = false
    console.log(`Don't spent it all :)`);
} else {
    console.log(`You should get a job`);
}

//--- Type Coercion: Checking something if it is defined or not.  ---

let height;  //Height here is initilised but bot defined (A value is not assigned to it.) Hense Boolean(undefined) is a falsy value.
if (height) {
    console.log("YAY, height is defined");
} else {
    console.log("Height is not defined!!!");
}
*/
//         --------------------------------------------

//          ---------- Equality Operators: == VS === ----------
/*
Strict Equality Operator:  === (Triple Equal Sign)
    Does not perform type coercion. Only return true when both side are the same ie 18 === 18 etc.
    (IMPORTANT: ALWAYS USE THIS, and do any COERCION manually by yourself. TO AVOID BUGS.)



Loose Equality Operator: == (Double Equal Sign)
    Performs type coercion. ie Converts value in string type to number.
    or Number to string

*/

//--- Strict Equality ---
/*const age = 18;

if (age === 18) console.log("You just became an adult :D") //When there is only one line for control structure, you can write one line without { }
*/
//--- Loose Equality---
/*const test = '18'

if (test == 18) {
    console.log("is the same");
} else {
    console.log("is not the same");
}

const favourite = prompt("What is your favourite number: "); //promptt(""): Getting a value from the web page input from the user.
console.log(favourite, typeof (favourite));

if (favourite == 23) {   //the string from the prompt will be converted to number then comparsion will be make (Loose Equality)
    console.log("this is an amazing number -- (Loose Equality)");
}

if (favourite === 23) {   //the string from the prompt will NOT be converted to number. (Strict Equality)
    console.log("this is an amazing number -- (Strict Equality)");
} else {
    console.log("Please make sure the value is a number type. -- (Strict Equality)");
}*/

//--- Else if Statement ---
/*const guess = Number(prompt("Please input an number 0 - 100: "));

if (guess === 23) {
    console.log("COOL!! 23 is an amazing number!!!");
} else if (guess === 7) {
    console.log("7 is also an amazing number!!!");

} else if (guess === 9) {
    console.log("9 is also an amazing number!!!");
} else {
    console.log("Value entered is not 7, 9 nor 23");
}*/

//--- Different Operator ---
/*
Strict Different Operator: !==
(IMPORTANT: ALWAY USE THE STRICT VERSION!!!)

Loose Different Operator: !=
*/

/*if (guess !== 23) {
    console.log("why not 23?");
}
*/
//          ---------------------------------------------------

//          ---------- Boolean Logic ----------
/*
Basic Boolean Logic:
1. AND &&
2. OR ||
3. NOT !
*/

//          -----------------------------------

//          ----------- Logical Operators ----------
/*
const hasDriverLicense = true;
const hasGoodVision = true;

// --- AND / OR operator  ---
//-- AND ---
console.log(hasDriverLicense && hasGoodVision);  //true and false => fause

//-- OR --
console.log(hasDriverLicense || hasGoodVision);  // true or false => true

//-- NOT --
console.log(!hasDriverLicense); //not true => false

const shouldDrive = hasDriverLicense && hasGoodVision;

// if (hasDriverLicense && hasGoodVision) {
//     console.log("Is able to drive");
// } else {
//     console.log("Someone else should driver");
// }

const ifTired = false;

console.log(hasDriverLicense || hasGoodVision || ifTired);
console.log(hasDriverLicense && hasGoodVision && ifTired);

if (hasDriverLicense && hasGoodVision && !ifTired) {
    console.log("Is able to drive");
} else {
    console.log("Someone else should drive");
}

*/
//          -----------------------------------------

//          ---------- Coding Challenge #3 ----------
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:

1. Calculate the average score for each team,using the test data below

2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus1:Include a requirement for a minimum score of 100.With this rule,a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

4. Bonus2:Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 //Dolphins Won

§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 //Koalas Won

§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 //Draw

GOOD LUCK 😀
*/

/*let firstScoreDolphins = 38;
let secondScoreDolphins = 80;
let thirdScoreDolphins = 70;

let firstScoreKoalas = 50;
let secondScoreKoalas = 50;
let thirdScoreKoalas = 99;

const averageDolphins = (firstScoreDolphins + secondScoreDolphins + thirdScoreDolphins) / 3;
console.log(`Dolphin's Score: ${averageDolphins}`);
const averageKoalas = (firstScoreKoalas + secondScoreKoalas + thirdScoreKoalas) / 3;
console.log(`Koalas's Score: ${averageKoalas}`);
*/

/*//--- 1 + 2 ---
if (averageDolphins === averageKoalas) {
    console.log(`It is a Draw`);
} else if (averageDolphins > averageKoalas) {
    console.log(`Dolphins Won`);
} else {
    console.log('Koalas Won');
}
*/

//--- Bonus1 + Bonus2
/*if (averageDolphins >= 100 && averageKoalas >= 100) {
    if (averageDolphins === averageKoalas) {
        console.log(`It is a Draw`);
    } else if (averageDolphins > averageKoalas) {
        console.log(`Dolphins Won`);
    } else {
        console.log('Koalas Won');
    }
} else if (averageDolphins >= 100) {
    console.log(`Dolphins Won`);
} else if (averageKoalas >= 100) {
    console.log(`Koalas Won`);
} else {
    console.log(`No one won, rematch needed`);
}
*/

//-- Easier Approach -- without using nested condition
/*if (averageDolphins === averageKoalas && averageDolphins >= 100) {
    console.log(`It is a Draw`);
} else if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log(`Dolphins Won`);
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
    console.log(`Koalas Won`)
} else {
    console.log('No one won');
}
*/
//          ----------------------------------------- 

//          ---------- The Switch Statement ----------
// Used with using one value to multiple different options.
// Equality is done by STRICT EQUALITY.

/*const day = "Thur";

switch (day) {
    case "Monday": // this is like a IF BLOCK ie if day === "Monday" if true then the code in this block will be executed
        console.log(`Plan couse structore`);
        console.log(`Go to coding meetup`);
        break;  //Without having this break, the codes following will run until a break is met or code is finised.
    case "Tuesday":
        console.log(` Prepare theory videos`);
        break;
    case "Wednesday":  // if day === "Wednesday" || day === "Thursday"
    case "Thursday":
        console.log(`Write code examples`);
        break;
    case "Friday":
        console.log(`Record Videos`);
        break;
    case "Saturday":
    case "Sunday":
        console.log(`Rest, Do nothing`);
        break;
    default:   //This well be executed if all other cases failed. This is like an ELSE BLOCK
        console.log(`Not a valid day.`)


}
*/

//--- Translating Switch to IF - ELSE ---
/*const day = "Sunday";

if (day === "Monday") {
    console.log(`Plan couse structore`);
    console.log(`Go to coding meetup`);
} else if (day === "Tuesday") {
    console.log(` Prepare theory videos`);
} else if (day === "Wednesday" || day === "Thursday") {
    console.log(`Write code examples`);
} else if (day === "Friday") {
    console.log(`Record Videos`);
} else if (day === "Saturday" || day === "Sunday") {
    console.log(`Rest, Do nothing`);
} else {
    console.log(`Not a valid day.`);
}
*/
//          ------------------------------------------

//          ---------- Statements and Expressions ----------
/*
Expression: A piece or pieces of code that produces values.
ie: 3 + 4, 1991, true && false
*/

/*
Statement: A larger piece of code that does not produce a value.
ie: Sequences of actions are statements.

if (23>10) {
    const str = "23 is bigger";
}
*/
//          ------------------------------------------------

//         ---------- The Conditional (Tenary) Operator ----------
/*
Allows us to write if-else statement but all in one line.
This is not a straight replacement for IF-ELSE statement, it is mainly used if only a quick dicision.
SYNTAX: condition ? if true then execute : else execute this ;
*/

/*const age = 23;
age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water`);

//--- A conventional approach ---
const drink = age >= 18 ? `wine` : `water`;   // the returned expression is stored in variable named drink
console.log(drink);

//-- Write the Tenary operator in a traditional If-ELSE statement --
let drink2;
if (age >= 18) {
    drink2 = 'Wine';
} else {
    drink2 = 'Water';
}
console.log(drink2);

//-- Having Conditional in template literal --
console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);
*/
//         -------------------------------------------------------

//          ---------- Coding Challenge #4 ----------
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip,depending on the bill value.Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value,the tip,and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430 
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's>= 50 && <= 300😉

GOOD LUCK 😀
*/

//--- IF ELSE statement Version --
let billValue = 430;
let totalValue;
let tip

if (billValue >= 50 && billValue <= 300) {
    tip = billValue * 0.15;
} else {
    tip = billValue * 0.20;
}

totalValue = billValue + tip;
console.log(`"The bill was ${billValue}, the tip was ${tip}, and the totla value was ${totalValue}"`)


//--- Tenary Operator Version ---
let totolPrice;

let tipValue = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;

totalPrice = billValue + tipValue;
console.log(`"The bill was ${billValue}, the tip was ${tipValue}, and the totla value was ${totalPrice}"`);



//          -----------------------------------------