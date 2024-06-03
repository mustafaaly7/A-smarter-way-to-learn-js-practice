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



// ------------------> chp 49 52
// ------------> form submmission

// function getData(){
// var firstName = document.getElementById("fN").value
// var lastName = document.getElementById("lN").value
// var phoneNumber = document.getElementById("phn").value
// var dob = document.getElementById("date").value
// // console.log(firstName, lastName,phoneNumber,dob);
// document.write("<h1> Your Full name is :" + firstName + lastName +"<br> Your phone number is :" +phoneNumber + "<br> your date of birth is :" + dob )

// }



// function seemore(el){
//     // console.log(el.innerHTML);
// var para = document.getElementById("para")
//     if(el.innerHTML == "Read More"){
//         para.innerHTML = "Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed."
// el.innerHTML ="Read Less"
// // para.innerHTML

//     }else if (el.innerHTML =="Read Less"){
//         para.innerHTML = "Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look."
//         el.innerHTML = "Read More"
//     }
// }





// ------------------> THE DOM 18 march 2024(DOCUMENT OBJECT MODEL) <---------------------------

// console.log(document.childNodes); // this will show junkifact aswell document means HTMl uske andar 2 child hote hain 
// console.log(document.childNodes[1].childNodes); // ab iske output mai array ky andar text show krrha hai which is the space we made in html js usse bh element count krta hai 
// -----> better than childnode which wont show junkifacts like doctype and text etc
// console.log(document.children[0].children[1].children); // p#para means p tag and its id para
// console.log(document.children[0].children[1].children[0].innerHTML) // now we targe whats in that para tag 






// --------------> HOW TO GET HTML TAGS THRU DOCUMENT AND FROM PARENT OR DIV OR SECTION OR CONTAINER

// var parasOut = document.getElementsByTagName('p') // this will get all the elements inside the document file means HTML in our outside div 
// console.log(parasOut.length);

// var papa = document.getElementById("parent")
// console.log(papa.lastElementChild); // this will get thhe last element child means any html tag or element which is not a junkartitfact
// console.log(papa.lastChild); // this will get the last child whether it is a element or junk artifact like text etc
// console.log(papa.firstChild);// this will get thhe first  child means first child whether it  is element or a junkartitfact
// console.log(papa.firstElementChild);// this will get thhe first element child means any html tag or element which is not a junkartitfact
// console.log(papa.lastElementChild.style.backgroundColor = "red"); // now u can style aswell or get any value aswell or attribute
// console.log(papa.firstElementChild.innerHTML = "Not Hello");// u can also change the innerhtml of that tag






//-------> we cant target middle child of the specific child of a parent div or container etc we can directly acces last and first child to access middle child we have to use 
// var papa = document.getElementById("parent")
// console.log(papa.firstElementChild.nextElementSibling); // first elem will get the first child of that parent and next sibling means next element after first child 
// console.log(papa.lastElementChild.previousElementSibling);//this will get previous elem sibling of that last parent child 




// ----> tag name maloom krne ky liye always show in capital like DIV H1 P
// var papa = document.getElementById("parent")
// console.log(papa.nodeName);
// console.log(papa.nodeType); // agr output 1 ain tou means HTML element hai agr 3 ain tou means junkartifact hai
// console.log(papa.lastElementChild.nodeName); // last child ka node name 
// var p = papa.lastElementChild
// console.log(p.parentNode); // parent div ajaaiga iska
// console.log(p.parentElement); // parent element ajaiga poora with childs


// ----------------> setting getting and finding attributes 

// function showpass(){
//     var input = document.getElementById("input")
//     // input.placeholder = "Enter Your Name" // you can set attribute like that aswell
//     // -----> OR 

//     // input.setAttribute("placeholder","Enter your nick") // or like this aswell

//     //------->to find out if that tag or element has attribute or not 

//     // input.hasAttribute("placeholder") // it will return true if it has attribute with that name or false if not 
//     // console.log( input.hasAttribute("placeholder")); // u can also find it like that
//     // var bool =  input.hasAttribute("placeholder")
//     // console.log(bool);

//     // -----> to get attribute

//     // var att =input.getAttribute("placeholder")

//     // console.log(att); // it will show null if it wont have attribute

// // ------> setting attribute thru that 

//     // input.setAttribute("type","password")

// }



// ---->Creating a  new tag or element completely using DOM / js


// var parent = document.getElementById("parent")

// var h1ele = document.createElement("h1")

// h1ele.innerHTML = "HELLO BROSSKI" // passing value by attribute

// h1ele.id = "child" // setting id attribute with value

// --OR u can also use for giving id 

// h1ele.setAttribute("id", "child")// seting id attribute with value

// parent.appendChild(h1ele) // this will add that element to that parent div we always have extra div if u want to create an element in js using DOM

// // u can style that element u created from here from html inline styling or from css by id u just gave above in line 767 and 769

// h1ele.style.color = "lightGreen" // styling from here

// DOM class topics completed 
// gotta practice more on DOM (document object model)
// ---------------------------------------------------------------------------------------

// ----------> Rough practice 
// console.log(parent.children[0]);
// console.log(document.children[0].children[1].children[0].children[0].innerHTML = "No"); // changing innerHTML of a tag we created using DOM
// document.write("<h1> hello")


// function add(){
// var parent = document.getElementById("parent")
// var input = document.getElementById("input").value
// // console.log(parent.children + input);
// var h1el = document.createElement("h1")
// h1el.innerHTML = input
// // console.log(h1el);
// parent.appendChild(h1el)
// h1el.style.color = "white"
// h1el.setAttribute("id", "h1")

// var btn = document.createElement("button")
// btn.innerHTML = "delete"
// btn.onclick = del()
// parent.appendChild(btn)


// }

// function del(){
//     var el = document.getElementById("h1").innerHTML
//     // el.split()
//     console.log(el.split());
//     // el[h1].remove()
//     // el.remove()
//     // console.log("hello");
// }




// -------------------> switch statement (use for comparison only and for other purpose use if else )
// var age = 10;
// switch (age){  // yahan variable pass hoga jispr check krna hai 
//     case 20 : // yahan sirf single value pass hoti hai or ye strict compare krta hai  === wala 
//         alert("you welcome")
//         break  // break lgana important hai wrna ye pooora read krega 
//         case 10: // ye wali true hogyi hai condition to ye default pr nh jaiga
//             alert("HEYAAAA")
//             break // break lgana important hai wrna ye pooora read krega 
//         default: // default is like else if all the conditions are false then it is gonna run 
//         alert("you're not welcome")
//         break
// }



// -----------------> while loop (most programming languages have while loop)

// var i = 0  // initiliazation bahir hoti hai jese for loop mai bh krskte hain andar bahir but iski bahir hi hoti hai 
// while(i<10){ // condition ( will only run if it is true)
//     // document.write("<h1>" + i)
//     console.log(i); // block of statements
// i++; // increment / decreament 
// }


// -----------------------> do while loop ( will run one time whether condition is true or not (not used much just for knowing ))

// var i = 0 ; // initiliazation outside
// do{ // do will take the block of statment
//     console.log(i);
//     i++ // increament /decrement aswell
// }
// while(i<5) // condition ky kb tk krna hai 
// now it will run the block of statement first before check the codition cuz js run line by line




// ---->  reverse loop using while / for loops

// var userInput = +prompt("enter a number")
// for(var i = userInput ; i>=0; i--){
//     console.log(i);
// }


// // var i = 10 
// var i = userInput
// while(i>=0){
//     document.write("<h1>" + i + "</h1>")
    // console.log(i);
    
    
//     i--;

// }
// console.log("hello");




// var arr = ["mustafa","haris",'sarim','sufyan']
// // var i = 0
// // while(i<arr.length){
// //     console.log(arr[i]);
// //     i++
// // }


// var i = arr.length-1
// while(i>=0){
//     console.log(arr[i]);
//     i--
// }






// var arr =[99]
// for(var i = 0 ; i<=10 ; i++){
    
//     // console.log(arr.push(i)); // adds the value in the end of array
// // console.log(arr.unshift(i)); // adds the value at the begining of the array
// // console.log(arr);


// }



// -------------> guess anumber challenge
// ---------------> WITHOUT INPUT FIELD AND FUNCTION

// var userInput = +prompt("Enter a number from 1-100")
// var no = Math.floor(Math.random()*10)
// // console.log(no);
// if(userInput == no){
//     document.write("<h1> You Won </h1>" + "<h1> The Number was " + no)
// }else{
//     document.write("<h1> Try again :( </h1>" + "<h1> The Number was " + no)

// }



// ----------------> with Input Field and function

// function game(){
//     // var userInput = +prompt("Enter a number from 1-100")
//     var userInput = document.getElementById("userInput")
// var no = Math.floor(Math.random()*10)
// // console.log(no);
// if(userInput.value == no){
//     document.write("<h1> You Won </h1>" + "<h1> The Number was " + no)
// }else{
//     document.write("<h1> Try again :( </h1>" + "<h1> The Number was " + no)

// }



// }




// ------------------------------------X -------------------------------------------- X
// Dated : 1 june 2024

// JS IS SYNCHRONAS MEANS LINE BY LINE READ KREGA AND WAIT NH KRTA
// ASYNCHRONAS MEANS WAIT KRANA CODE KO WE CAN MAKE OUT JS AYNCHRONAS
// FOR THAT WE CAN USE setTimeout() function to make our code wait for some specific time


// setTimeout(function name without paranthesis i.e (), time in milliseconds means 1000 milliseconds = 1 sec )

// function foo() {
//     console.log("hello2");
// }


// console.log("hello1");
// setTimeout(foo, 2000) // means call foo function after 2 sec wait
//NOW JS IS SYNCHRONAS MEANS YE CODE READ KRTA RAHEGA AND WAIT KO IGNORE KRDEGA AND THE SETTIMEOUT CODE WILL RUN AFTER TIME BHALAY WOH BEECH MAI AIN PHLY AAIN
// WE CAN ALSO CREATE DIRECT FUNTION IN SET TIMEOUT USKA SYNTAX HOGA
// setTimeout(function(){
//     console.log("hello bois");
// } , 5000) // means 5 sec baad

// setTimeout(function () {
//     console.log("hello 2from direct fuction inside setTimeout");
// }, 2000)

// console.log("hello3");
// console.log("hello4");

// --------------------X---------------------X --------------------------------X --------------------------X ------------X


// -------------------> SetInterval() // METHOD
// What does it do??  it repeat the function after the given time u gave

//SYNTAX ?


// setInterval(function name without paranthesis  / or direct create function without function name , time in milliseconds if.e 1000milliseconds = 1 sec )


// --------------> Now try it with direct creating function inside it without function name
// And Inside a variable


// var interval = setInterval(function () {
//     console.log("Hello after every 1 sec");
// }, 1000)

// it will run without needing to print it or anything / cuz variable store huwa or ye run krna start krdega

// --------------> Now try it with direct creating function inside it without function name
// Without variable


// setInterval(function () {
//     console.log("Hello after every 1 sec");
// }, 1000)



// --------------> Now try it with function outside interval

// function print() {
//     console.log("Hello after every 1 sec");
// }


// setInterval(print, 1000)



// --------------------X-------------------X ------------------------------X -------------------X
// ------------> HOW TO STOP INTERVAL??
// we use clearInterval() Method for that
// -----------------> SYnTAX
// clearInterval(var name jisme set interval store kraya hai )

// Now lets try it


// var interval = setInterval(function () {
//     console.log("Hello after every 1 sec");
// }, 1000)


// clearInterval(interval) // it will stop that interval we can also make it stop on button 


// ---------------------x ------------------------------X ----------------------------------X -------------------- X
// dated : 2-june -2024


// Objects ?? 
// Objects Is king in javascript / everything in js is object 
// object is a collection of data just like arrray
// var stdArr = ["Pakistan", 'karachi', "john", 20] // this is undefined data cuz array store undefined data while object stores defined data
//if someone looks at that array without knowing what pakistan karachi and 20 is its undefined thats why we use object 
// OBJECT IS USE FOR DEFINED DATA COLLECTION
//Syntax for object 

// var stdObj = {                  // Object name = object bracket 
//     name: "john",              // key name which in array is index but in object it is defined as key name and john is key value
//     age: 20,
//     city: "karachi",           // they both together in html is known as attribute and has key value relationship 
//     country: "pakistan"       // and to terminate it we use , comma / we can store any type of data in it such as object function string array number etc every data type 

// }

// console.log(stdObj); // it will get the entire obj like name : john etc with key and value which in array is index and value
// console.log(stdArr); // it will get the entire array with index and value like 0 : pakistan etc


// how to get only name value ??
// we use two methods to get only name key value and not anything else

// array notation method

// console.log(stdObj["name"]); // object name array bracket "key name " in string
// like we do in array
// console.log(stdArr[0]); // array name array bracket then inside index number


// 2. Object Notation


// console.log(stdObj.name); // object name . key name


// now can we print the value 1 by 1 like we do in array using for loop ?



// for array we use for loop
// for (var i = 0; i < stdArr.length; i++) {
//     console.log(stdArr[i]); // it will print one by one in index value given as var i

// }

// WE CANT USE FOR LOOP IN OBJECT
// WE USE FOR IN LOOP IN OBJECT TO PRINT OBJECT KEY VALUE ONE BY ONE

//syntax

// for (var key in stdObj) {   // created a variable in loop named as key
//     console.log(stdObj[key]); // then print the key{variable} in object key value to get the key values
//     console.log(key); // this loop is running inside object so it will print key name if we only print the var created in loop named as key
// }



//  want only name and age?
// use continue and break method but mostly used is continue which  ignore the condition if true

// for (var propName in stdObj) {
//     if (propName == "city") {
//         continue
//     }
//     if (propName == "country") {
//         continue
//     }
//     console.log(stdObj[propName]);

// }
// it is same as used in for loop



// now adding evertype of data in object
// var stdObj = {
//     name: "mustafa",                         // string
//     age: 20,                                // number
//     email: null,                            // null
//     result: undefined,                        //undefined 
//     courses: ["html", "css", "js"],         // array in object
//     marks: {                                    // Object in object
//         html: 70,
//         css: 50,
//         js: 80
//     },
    // we can also create function inside object which is known as method 
    // function inside object is called method
    //function outside object is called function 

//     calcMarks: function (name) { // we can also pass argument and parameters in it 
//         // console.log(this); // what does this do ? It will get you the object jisme function mojud hai 
//         // console.log(this.courses); // it will give u anything inside that object using this property
//         // console.log("hello", name);
//         var total = this.marks.css + stdObj.marks.html + this.marks.js  // we can do both this and object name 
//         this.result = total; //  reinitialize the value of result which is key in that object using "this "
//         return total
//     }



// }

// console.log(stdObj.calcMarks()); // this is method object . property name () function name and paranthesis to call method that we creatd inside object
// console.log(stdObj.result);
// why it is showing undefined ??
// we always have to "RETURN" the value inside the function that we created in object (known as user defined method )
// after we use return it wont show us undefined in console cuz we returned that value 

// -----------------------X---------------------------X-------------------------------------X


// Now we reintialize the value of result key 

// console.log(stdObj.result); // it will still show the value which we intialized in the begining why?


// cuz we havent called our function and it didnt reinitialized the value yet so we have to call the function first in order to get the reinitialized value

// stdObj.calcMarks() // calling our method 
// console.log(stdObj.result); // so the value of result will be reinitialized else it will not 



// -----------------------X---------------------------X-------------------------------------X

// we can also reinitalize the value of the property inside our object

// stdObj.age = 900 // reinitialized the value of result 
// console.log(stdObj.age);


// we can also delete the key and its value 

// delete stdObj.age //  delted the key named age and its value 
// console.log(stdObj); // now it wont show the value and its key named age in it 


// we can also create the key nd its value 
// stdObj.id = 187116 // created the key named id and assigned its value 
// console.log(stdObj.id); // now it is in object 

// in browser object will be shown as in alphabetical order like a - z









// ------------------------------------X---------------------------------------X--------------------------X



















