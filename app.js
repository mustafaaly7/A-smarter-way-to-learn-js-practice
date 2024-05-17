// JS CHAPTER 1
// alert("HELLO VISITORS")
// alert("Error !  Please Enter valid Password");
// alert("Welcome to Js Land \n Happy Coding :" )

// alert("Welcome to js Land")
// alert(" I can Run Js through my web browser")
// alert("Happy coding")




// JS Chapter 2

// var userName ; 
// var myName = "Muhammad Mustafa Ali"

// var message = "hello World "
// alert(message);


// var fullName = prompt("Enter your Full Name ")
// var  age = +prompt("Enter Your age")
// var qualification = prompt("Enter Your current Qualificaation")
// alert(fullName)
// alert(age)
// alert(qualification)



// var data = "PIZZA"
// alert(data + "\n" + data.slice(0,-1) + "\n" + data.slice(0,-2) +"\n" + data.slice(0,-3) +"\n" + data.slice(0,-4) +"\n" + data.slice(0,-5))



// var userEmail = prompt("Enter your Email");
// alert(userEmail + "@gmail.com")


// var book ="smarter way to learn JavaScript"
// alert(book)


// document.write("yeah I can write html through Js")
// document.write("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")

// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")



// JS CHAPTER 3

// QUESTION: (VERY IMPORTANT ) Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. 


// var visitCounter = localStorage.getItem("Enteries"); // generate key and won't change even if the tab is closed


// if (visitCounter === null){


//     visitCounter = 0;
// }
// visitCounter++;
// localStorage.setItem("Enteries" , visitCounter);


// document.write("you've visited this site " + visitCounter)

// Different Question
// var birthYear = 2003;
// document.write("My Birthyear is "+ birthYear +"<br>");
// document.write("Data type of my declared variable is "+ typeof birthYear);



// var userName = "john "
// var product = "Tshirts"
// var quantity ="5"
// document.write(userName + " ordered" + quantity +product)

// ----- > JS chapter 4


// var userName = "Mustafa"
// var userEmail = null;
// var flag = true ; 

// legal variables name 

// var name = "mustafa"
// var userName = "ali"
// var user1 = "No"
// var _user = "yes"
// var user_name = "ye"





// -----> Chapter 31-34 



// var now = new Date()
// console.log(now)
// var months = ["jan" , "feb" ,"march","april","may","june","july","aug","sep","oct","nov","dec"]
// var month = new Date().getMonth()
// console.log(month);

// alert("Current Month : "+ months[month])


// var days = ["sun","mon","tue","wed","thu","fri","sat"];
// var now = new Date().getDay()

// alert("current Day : " +days[now])
// if(now == "4"){
//     alert("funday ")
// }else{
//     alert("grind nigga")
// }


// var writtenNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one"];



// var day = new Date().getDate()
// alert("today's date is : " + writtenNumbers[day])



// var currentDate = new Date()
// var pastTime =  currentDate.getTime()
// var pastMinutes = pastTime/(1000*60*60)
// document.write("Current Date : " + currentDate + "<br>")
// document.write("milliSeconds since 1970  : " + pastTime + "<br>")
// document.write("Seconds since 1970 : " + pastMinutes + "<br>")

// var hours = new Date().getHours()
// // alert(hours)
// if(hours <= 12){
//     alert("Its " + hours + " Am")
// }else{
//     alert("Its " + hours +"PM")

// }


// var laterDate = new Date()

// alert("Later date :"+ laterDate)



// var oldDate = new Date("15 june 2015")
// var today = new Date()
// var milliseconds = today - oldDate;
// var difference = Math.floor(milliseconds / (1000*60*60*24));
// alert(difference + " days passed since 1st Ramadan in June 2015")


// var oldDate = new Date("1 jan 2015 ")
// var newDate = new Date("5 dec 2015")
// var milliSeconds = newDate - oldDate ; 
// var difference = Math.floor(milliSeconds / (1000*60))
// alert(difference + "seconds have passed since 1st jan 2015 to 5 dec 2015")


// var time = new Date()
// // alert(time)
// var hour = time.getHours()
// var minutes = time.getMinutes()
// var  seconds = time.getSeconds()
// alert(hour +":" + minutes +":" + seconds)


// var time = new Date();
// var timeHour = time.getHours()
//  time.setHours(timeHour - 1)
// alert( "Current Time :" + new Date() + "\n" +"One Hour Before : " + time)

// program / application to find your age <----------


// var userInput = prompt("Enter your DOB" , "28 march 2004")
// var dob = new Date(userInput) // prompt returns string not a date object so we have to make a  new var to store that value as dob aka date of birth
// var entry = new Date();
// var milliSeconds = entry - dob
// var age = Math.floor(milliSeconds / (1000*60*60*24*365))
// alert(age)

// var year = new Date();
// var now = new Date();
// var yearNow = now.getFullYear()
// now.setFullYear(yearNow - 100)
// alert("Year Now " + year + "\n" + "100 years ago " + now)


// var userInput = prompt("Enter your age ")
// var age = userInput
// var now = new Date();
// var yearNow = now.getFullYear()
// now.setFullYear(yearNow - age)
// alert("your age is " + age +"\n"+ "you're Borned in " + now)

// ------> K- Electric Bill Generator 

// var months = ["jan","feb","march","april","may","june","july","august","september","october","november","december"]
// function userInfo(){
//     var userName = document.getElementById("userName")
//     // alert(userName.value)
//     var month = new Date().getMonth()
//     var units =  Math.floor(Math.random()*500) ; 
//     var chargePerunit = 16 ; 
//     var netAmount = units * chargePerunit;
//     var latePayment = 350;
//     var grossAmountLate = 350 + netAmount
// // alert(months[month] + units )
// document.write("<h1> K Electric Bill </h1>")
// document.write(" <h4> Customer Name : " + userName.value)
// document.write(" <br> Month : " + months[month])
// document.write("<br> Number of Units : " + units)
// document.write("<br> Charge Per Unit " + chargePerunit)
// document.write("<br> Net Amount Payable (within Due Date) :" + netAmount)
// document.write("<br> late Amount Surcharge " + latePayment)
// document.write("<br> Gross Amount Payable (after Due Date) " + grossAmountLate)
// }




// -----> Chapter 35-38


// function time(){
// var currentTime = new Date()
// alert(currentTime)


// }

// function greet(){
//     var fn = document.getElementById("fn")
//     var sn = document.getElementById("sn")
//     var fullName = fn.value + sn.value;
//     alert("hello " +  fullName)
// }

// function add(){
//     var num1 = +prompt("Enter First Number")
//     var num2 = +prompt("Enter Second Number")
// var addition = num1 + num2 ;
// alert(addition)
// }

// add();


// var userInput1 = +prompt("Enter 1st Number")
// var userInput2 = +prompt("Enter 2nd Number")
// var userInput3 = prompt("Enter a Operator")

// function calculator(num1, num2 , operator){
//  var result ; 
//     if( operator == "+"){
//     result = num1 + num2 
    
//  }
//  else if( operator == "-"){
//     result = num1 - num2 
    
//  }
//  else if ( operator == "*"){
//     result = num1 * num2 
    
//  }
//  else if( operator == "/"){
//     result = num1 / num2 
    
//  }else{
//     alert("Enter Correct Operator")
//  }
//  alert(result)
// // return result;

// }






// var userInput = +prompt("Enter Any Number")
// function square(num1){
// var square = num1 * num1 ;
// // console.log(square);
// return square;


// }
// square(userInput)
// var result = square(userInput);

// console.log(result);


// ------> factorial of a number (i.e factorial of 5 =5x4x3x2x1)


// var userInput = +prompt("Enter Any Number")

// function factorial (n){
// var result = 1 ; // initialize var result at 1 
// for(var i = 2 ; i<=n ; i++){
// result *= i; // then append it with the value means  1 *2 = 2 then as loop goes on 2*3 = 6 then 6*4  etc it appends the value with the current one but with multiply

// }

// console.log(result);

// }

// factorial(userInput)


// var start = +prompt("Enter Starting number ")
// var end = +prompt("Enter ending number ")

// function counting (num1 , num2){
// for(i=num1 ; i<= num2; i++){
//     console.log(i);
// }



// }

// counting(start,end)


// ----------------> insertion of element in array DSA in any position Aka splice method in array 

// var arr = [10,30,40,50,60]
// console.log(arr);
// var value = 20
// var position = 1

// for(var i = arr.length-1 ; i>=position ;i--){
//        arr[i+1]= arr[i] 
//         if(i == position){
//             arr[i]= value
//         }
    
// }
// console.log(arr);

// ------> now we can perform the above insertion of element code with splice method

// var items = [10,20,30,40,60]
// items.splice(4,0,50) // ( index number where u want to add  the value ,how many u want to delete , te value u want to add)
// console.warn(items);


// now make that insertion element Algorithm bit dynamic 
// function addValue(){
// var arr =[10,20,30,40]
// var value = document.getElementById("value").value
// var position =document.getElementById("position").value
// for( var i = arr.length-1 ; i>= 0 ; i--){
//     if(i>=position){
//         arr[i+1] = arr[i]
//     }if(i == position){
//         arr[i] = value
//     }
// }
// console.log(arr);
// }

// Q 8 ----------> Write a nested function that computes hypotenuse of a 
// right angle triangle.   ( WITH PARAMETER AND ARGUMENTS)

// function calculateHypotenuse (userInput1  ,userInput2){

// function square (x){
//     return x * x;
// }
// var baseSquared = square(base)
// var PerpendicularSquared = square(Perpendicular)

// var sum = baseSquared + PerpendicularSquared;
// var hypotenuse = Math.sqrt(sum)
// return hypotenuse;

// }
// var base = +prompt("Enter Base")
// var Perpendicular = +prompt("Enter Perpendicular")

// var output = calculateHypotenuse(base , Perpendicular);
// console.log(output);



// Q8----------> Write a nested function that computes hypotenuse of a 
// right angle triangle.   ( WITHOUT PARAMETER AND ARGUMENTS)

// function calculateHypotenuse (){
//     var base = +prompt("Enter Base")
//     var Perpendicular = +prompt("Enter Perpendicular")
  
//     function square (x){
//         return x * x;
//     }
//     var baseSquared = square(base)
//     var PerpendicularSquared = square(Perpendicular)
    
//     var sum = baseSquared + PerpendicularSquared;
//     var hypotenuse = Math.sqrt(sum)
//     return hypotenuse;
    
//     }
    
//     var output = calculateHypotenuse();
//     console.log(output);
    


// square and cubes 
// ------> square 
// var number =5 
// var square = number ** 2;
// console.log(square);
// ------> cube 
// var cube = number ** 3; // means multiply three times to the same number
// console.log(cube);
// var fourthExpo = number ** 4;
// console.log(fourthExpo);

// let number = 5;
// let cube = Math.pow(number, 3); // Base number, exponent (power of 3) math.power (number ki power 3) (number,power kitni hai)
// console.log(cube); // Output: 125 (5 x 5 x 5)

// ---------------> Area of Rectangle through Variables in argument
// var w = +prompt("width?")
// var h = +prompt("Height?")

// function area (width,height){
// var A = width * height;
// console.log("Area of rectangle is ", A);

// }

// area(w,h)



// --------------> area of rectangle without variable in argument direct value

// function area (width,height){
// var A = width * height;
// console.log("Area of rectangle is ", A);

// }

// area(5,6)


// ----------------> Write a JavaScript function that checks whether a passed 
// string is palindrome or not?  
// var userinput = prompt("Check words to see if its palindrome","Maham")
// function ispalindrome(str){
// var alphaNumericstr = str.replace(/[^A-Za-z0-9]/g,'').toLowerCase(); // this will replace all the special characters with "" khali jaga mtlb

// var reverse = alphaNumericstr.split('').reverse().join('');
// var result = alphaNumericstr === reverse;
// // if(result ==  true){
// //     console.log("working");
// //     return result
    
// // }else{
// //     console.log("not true");
// //     return result
// // }
// return alphaNumericstr === reverse

// }

// var output = ispalindrome(userinput);
// console.log(output);




// ----------------> Write a JavaScript function that checks whether a passed 
// string is palindrome or not? with if else   
// var userinput = prompt("Check words to see if its palindrome","Maham")
// function ispalindrome(str){
// var alphaNumericstr = str.replace(/[^A-Za-z0-9]/g,'').toLowerCase(); // this will replace all the special characters with "" khali jaga mtlb

// var reverse = alphaNumericstr.split('').reverse().join('');
// var result = alphaNumericstr === reverse;
// if(result ==  true){
//     console.log("working");
//     return result
    
// }else{
//     console.log("not true");
//     return result
// }
// // return alphaNumericstr === reverse

// }

// var output = ispalindrome(userinput);
// console.log(output);


// ------> Write a JavaScript function that accepts a string as a  parameter and converts the first letter of each word of the   string in upper case. 

// var userInput = prompt("Enter a word or sentence")

// function capitalized(str){
//     var input = str.split(" ") // converts the string into array for eg str = Mustafa Ali that will convert it into str = [mustafa,ali]
//     for(var i = 0 ; i< input.length ; i++){
// input[i] = input[i].charAt(0).toUpperCase()+ input[i].slice(1) // character at 0 index to upper case then concade it with the remaining value of that specific index in  array means M + ustafa 


//     }
// var capital = input.join(" ") // convert that array into string again 
// return capital;

// }
// var output = capitalized(userInput)
// console.log(output);

// ----------------> Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
  
// function result(){
//     var userInput = document.getElementById("input").value
//     var words = userInput.split(" ")
// var longestWord ;
// var maxlength = 0;

// for(var i =0; i< words.length ; i++){
//     var word = words[i]

//     // console.log(word);
//     if(word.length > maxlength){
//         longestWord = word
//          maxlength = word.length
//     }
// }
// alert("The longest word in your given sentence is " + longestWord)

// // return longestWord

// // console.log(longestWord );
//     // console.log(userInput.value);
// }

// // var output = result()





// ---------> Write a JavaScript function that accepts two arguments, a  string and a letter and the function will count the number of occurrences of the specified letter within the string. 


// var userInput1 = prompt("Enter the sentence").toLocaleLowerCase()
// var userInput2 = prompt("Enter the letter").toLocaleLowerCase()
// function counting(str ,letter){
//     var count = 0;
//     for(var i =0 ; i< str.length ; i++){
//         if(str[i] == letter){
//             count  ++ ; // means add if count is 1 it will make it two 
//             // count = count +1; // it will also do the same as above if we do count = count+2 ; it will add twice 

//         }
//     }
//     return count
// }

// var output = counting(userInput1 , userInput2);
// console.log("the amount of times " + userInput2 + " appears in "+ userInput1 + "is "+ output);

// -----> Create 2 functions that calculate properties of a circle, using the definitions here.

// var userInput = +prompt ("Enter Radius")

// function  calcCircumference(radius){
//     circumference = 2 * 22/7 * radius
//     function  calcArea (radius){
//         var area = Math.PI * Math.pow(radius , 2)
//         // console.log("The Area of Circle is " ,area);
//         return area
//     }
    
//     console.log("the circumference of a circle is : " + Math.floor(circumference)  + "\n The area of circle is :" , Math.round (calcArea(userInput)) );

// }

// var output = calcCircumference(userInput)
//  both above and below way work to call a function and to work
// calcCircumference(userInput)


// --------------> Chapter 43-48


// function purchase(){
//     alert("thanks for purchasing :D")
// }


// ------> to remove a row on delete button

// function remove(value){
//     var tr = document.getElementsByTagName("tr")
//     console.log(tr.length , tr );
// tr[value].remove()

// }

// ----------> toggle change image


// function change(imgEl){
//     var input = imgEl.src
//     // console.log(input);
//     imgEl.src = "./images/images.jpg"
// }


// function change1(imgEl){
// var input = imgEl.src
// imgEl.src ="./images/Apple+iPhone+15+Pro+Max_-_24629.webp"

// }



// ---> Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.

// function increase(){
//     var input = document.getElementById("input")
//     input.value ++;
// }


// function decrease(){
//     var input = document.getElementById("input")
//     input.value = input.value -1; // same as input.value -- 
// }





