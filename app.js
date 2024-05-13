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




