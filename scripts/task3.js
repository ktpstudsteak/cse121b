// I spent hours troubleshooting this because I wrote my own
// Task3.js file and the HTML pointed here :3
//
//                                      ;;.
//                                     ,t;i,                 ,;;;:
//                                     :t::i,              ,;i;:,:,
//                                     11;:;i;.          .;i;:::,,:
//                                    ,1;i11i11iii;;;;::;;:,:,..,,:.
//                                  .:1ttt11i;iii1111ii;:.,:,. .,::.
//                              ,i1tfftfffti;;ii;iiiiiii;:,,.  ,:;,
//                             ;Lfffttttft1;;;i111i;;iii11i:..,:,;;
//                            .fLLLt:,,;t1i;;1tttt1ii;iii1111i;:,:1;
//                            1C00Ci. .i1t111ii;;:,:;;iii11111i;,,it.
//                           ,C00Ct1i1tttftti:. :.  ,ii11111111i;:;1,
//                           t0GGGfffftffftt1i;::,:i1tfffttttt11iii1;
//                          ,CCGC;,...,;fLftt1tt11111tfLLftffftt11i11.
//                          iGLGt       tLfftttfffLffffffLfffttt1ii11i
//                          iGLf;.    .:i1tt11ffffffLfffftt1111ii;iiit;
//                          1GLt:..  ..:iii1111ttttt1ttt1111111i;;i;i1t
//                          ;GLLt,     .,::::,:i11111t11ttfttt1i;;;;iit:
//                          .LCLft;.........,:i1111ttttttttt11i;;;;;;i1i
//                           ,LLfff1iiiiiiii111111111tttt11iii;;;;::;;it;
//                            tfffftttt1111iiiiii1ttttt111iii;;;:::;;;iti
//                           :Ltttttt1111iiiiiii1tttt111111iii;:::;iii1t1
//                           ;Lftt11111111iiiiiiii;iii11111ii;;;ii111t1f1
//                           tLffftt1ii;ii;;;;;;;;ii11111111ii1tttttttttf
//                           fCLfftt11ii;;;;;;ii11t11111tttttffffffftttt1
//                          ,LCLLfft111iiiiiii11t111ttt11tttffttfffftt11:
//                       .:1fLLLffttt11iiiiii111111111ttft1tffffffftt1ii;
//                     ,1fLLCLLffttt111iiiii11111111t1tttfftfffffftt1i;;i
//                  .:tffLCCCCLfftt1111i1i1111111t1t1111ttffffttt11ii;;;i
//                 ,fLffLGGCGCLfftt111ii11111t1tttttttt11tfffftt111i;;;;1
//                :fftfCGGLCCLLftt111ii1ii1111111tt11tttt1tttttttttti;;;t.
//                :11tLGGLfffffttt1111iiiiiiii11111111i1111tttttffft1;;;1.
//            .,;i111tCCLfftt11t11111i1ii1iiiiiii1i1ii11111ttttttfft1;:;:
//          ,:;iiiii1tLLfttftt1iiiiiiiiiiiiiiiii1iii11111i111ttttttti;;;,
//          ;;:;;;::1ffffffLLfftt111111iii1iiiii1ii111111ii11ttttttti;;i,
//          .:::::iLGftffLLLLLLfttttttt1iii11tttttt11iiiii111ttttttti;;;
//            ...;1tt1tfLLLLLLLfftt11t1ttfLCCLLLftt111iiii1111tttttt1ii.
//                    1CLLLLLLLfftttffLGGGGCLLCLft1t11iii111t111ttttt1,
//                    ,ttfffLLLLLfffLLGGLCCff11fttt11iiii11111111tt1t,
//                        ..:;itf1tfffttt;1ti;::11i;;;iiiii111111111i
//                              ..:1t1;::...:;, :1tfi,;ii;ii1111ii;i.
//                                  ..,;;:.....;11tLL;:,:::;;;iiii;:
//                                      ,;... .:,:i;1i,         ...
//                                               ....,


/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2){
    sum =  +number1 + +number2;
    return sum;
}

// Step 2: In the function, return the sum of the parameters number1 and number2
function addNumbers(){
    var number1 = document.getElementById("addend1").value;
    var number2 = document.getElementById("addend2").value;

    var sumNumber = add(number1, number2);

    document.getElementById("sum").value = sumNumber;
}
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
function subtract(number1, number2){
    difference =  +number1 - +number2;
    return difference;
}

function subtractNumbers(){
    var number1 = document.getElementById("minuend").value;
    var number2 = document.getElementById("subtrahend").value;

    var sumNumber = subtract(number1, number2);

    document.getElementById("difference").value = sumNumber;
}
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function multiply(number1, number2){
    var x =  (+number1 * +number2);
    return x;
}

function multiplyNumbers(){
    var number1 = document.getElementById("factor1").value;
    var number2 = document.getElementById("factor2").value;

     sumNumber = multiply(number1, number2);

    document.getElementById("product").value = sumNumber;
}

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
function divide(number1, number2){
    var x =  (+number1 * +number2);
    return x;
}

function divideNumbers(){
    var number1 = document.getElementById("dividend").value;
    var number2 = document.getElementById("divisor").value;

     sumNumber = divide(number1, number2);

    document.getElementById("quotient").value = sumNumber;
}
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers


// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date

// Step 2: Declare a variable to hold the current year
var date = new Date(); 
var year;
year = date.getFullYear();

document.getElementById("year").innerHTML = year;
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year


/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").value = days;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
var odds = days.filter(n => n%2);
document.getElementById("odds").innerHTML = odds;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
var evens = days.filter(n => n % 2 == 0 );
document.getElementById("evens").innerHTML = evens;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const reducer = (previousValue, currentValue) => previousValue + currentValue;
document.getElementById("sumOfArray").innerHTML = days.reduce(reducer);
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const newDays = days.map(func2);

function func2(input){
    return input * 2;
}

document.getElementById("multiplied").innerHTML = newDays;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.getElementById("sumOfMultiplied").innerHTML = newDays.reduce(reducer);
