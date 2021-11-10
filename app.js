/////////////////  CHAPTER ARRAYS  /////////////////

////// Q NO. 1-7
/*
var stdArr = [];
var stdArr = newstdArr ();
var strArr = [""];
var numArr = [5 , 2];
var boolArr = [true , false];
var mixArr = ["Name in string", 5, true, false,];


var qualifArray = ["SSC","HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2>Qualifications</h2>")
document.write("<ol><li>"+qualifArray[0]);
document.write("<li>" +qualifArray[1]);
document.write("<li>" +qualifArray[2]);
document.write("<li>" +qualifArray[3]);
document.write("<li>" +qualifArray[4]);
document.write("<li>" +qualifArray[5]);
document.write("<li>" +qualifArray[6]);
document.write("<li>" +qualifArray[7]+"</ol>");
*/


////// Q NO. 8
/*
var stdArr = ["Michael", "John", "Tony"];
var stdMarks1 = [parseInt(prompt("Enter Michael Marks"))];
var stdMarks2 = [parseInt(prompt("Enter John Marks"))];
var stdMarks3 = [parseInt(prompt("Enter Tony Marks"))];
var stdMarksArr = [stdMarks1, stdMarks2, stdMarks3];
var totalMarks = 500;
var percentStd1 = stdMarks1 / totalMarks * 100;
var percentStd2 = stdMarks2 / totalMarks * 100;
var percentStd3 = stdMarks3 / totalMarks * 100;
document.write("<br>Score of " + stdArr[0] + " is " + stdMarksArr[0] + ". Percentage: " +  percentStd1 + "%");
document.write("<br>Score of " + stdArr[1] + " is " + stdMarksArr[1] + ". Percentage: " +  percentStd2 + "%");
document.write("<br>Score of " + stdArr[2] + " is " + stdMarksArr[2] + ". Percentage: " +  percentStd3 + "%");
*/

////// Q NO. 9
/*
var colorArr = ["red", "blue","black",];
document.write("<br>"+ colorArr);
var userColor = prompt("Enter the color you want add to the beginning ");
colorArr.unshift(userColor);
var updtArr = colorArr;
document.write("<br><br>" + updtArr);

var userColor = prompt("Enter the color you want add to the END ");
colorArr.push(userColor);
var updtArr2 = colorArr;
document.write("<br><br>" + updtArr2);

colorArr.unshift("Aqua","Yellow");
var updtArr3 = colorArr;
document.write("<br><br>" +updtArr3);

colorArr.shift(userColor);
var updtArr4 = colorArr;
document.write("<br><br>" + updtArr);

colorArr.pop(userColor);
var updtArr5 = colorArr;
document.write("<br><br>" + updtArr);

var userColorindex = +prompt("Enter the index number where you want to add Color");
var askColor = prompt("Enter The Color ");
colorArr.splice(userColorindex,0,askColor);
var updtArr6 = colorArr;
document.write("<br><br>" +updtArr6);

var askColorindex1 = +prompt("Enter the index number where you want to remove color");
var askColor1 = prompt("Enter The Color ");
colorArr.splice(0,askColorindex1,askColor1);
var updtArr7 = colorArr;
document.write("<br><br>" +updtArr7);
*/

////// Q NO. 10

// var stdScores = [320, 230, 480, 120];
// document.write("Student Scores" + stdScores + "<br><br>");

// stdScores.sort();
// var uptScores = stdScores;
// document.write("Ordered Student Scores" + uptScores + "<br><br>");


////// Q NO. 11

// var citiesArr = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("<b>Cities List: </b><br><br>");
// document.write(citiesArr + "<br><br>");
// var updcities = citiesArr.slice(0,3);
// document.write("<b>Selected Cities List: </b><br><br>");
// document.write(updcities);


////// Q NO. 12

// var arr = ["This ", " is ", " my ", " cat "];
// document.write("<h3>Array:</h3>" + arr);

// var mergeArr = arr.join(" ");
// document.write("<h3>String:</h3>" + mergeArr);


////// Q NO. 13

// var deviceArr = ["keyboard","mouse","printer","moniter"];

// document.write("<br>"+"Devices"+"<br>"+deviceArr+"<br><br>");
// document.write("Out:"+ "<br>" +deviceArr[0]+"<br>");
// document.write("Out:"+ "<br>" +deviceArr[1]+"<br>");
// document.write("Out:"+ "<br>" +deviceArr[2]+"<br>");
// document.write("Out:"+ "<br>" +deviceArr[3]+"<br>");


////// Q NO. 14
/*
var deviceArr = ["keyboard","mouse","printer","moniter"];

document.write("<br>"+"Devices"+"<br>"+deviceArr+"<br><br>");
document.write("Out:"+ "<br>" +deviceArr[3]+"<br>");
document.write("Out:"+ "<br>" +deviceArr[2]+"<br>");
document.write("Out:"+ "<br>" +deviceArr[1]+"<br>");
document.write("Out:"+ "<br>" +deviceArr[0]+"<br>");

                    ///  SHORTCUT  ///
var reverseArr = deviceArr.reverse();
document.write(reverseArr);
*/

////// Q NO. 15

// var manufacturers = ["Apple","Samsung", "Motorola", "Nokia", "Sony","Haier"];

// document.write("<select><option>"+ manufacturers[0] +"</option>");
// document.write("<option>"+ manufacturers[1] +"</option>");
// document.write("<option>"+ manufacturers[2] +"</option>");
// document.write("<option>"+ manufacturers[3] +"</option>");
// document.write("<option>"+ manufacturers[4] +"</option>");
// document.write("<option>"+ manufacturers[5] +"</option></select>");


/////////////////  CHAPTER ARRAYS AND LOOP  /////////////////

////// Q NO. 1

// var multiArr = [
//     [1],
//     [2],
//     [3],
// ];

////// Q NO. 2

// var multiArr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1],
// ];
// document.write(multiArr[0] + "<br><br>");
// document.write(multiArr[1] + "<br><br>");
// document.write(multiArr[2] + "<br><br>");


////// Q NO. 3

// for(var i = 1; i <= 10; i++){
//     document.write(i + "<br>");
// }


////// Q NO. 4

// var table = +prompt("Enter a Number");
// var length = +prompt("Enter a Length");

// document.write("<h1>Multipilication Table Of "+ table +"<br>Length Is "+length+"</h1>");

// for(var i = 1; i <=length; i++){

//     if(i === 3){
//         document.write("HI " + i + "<br>");
//         // continue;
//         // break;
//     }
//     document.write(table + "x" + i + "=" + 2*i + "<br>");
// }


////// Q NO. 5

// var fruits = ["apple", "banana", "mango", "orange"];

// for(var i = 0; i < 4; i++){
//     document.write(fruits[i] + "<br>");
// }

// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }

////// Q NO. 6
/*
document.write("<h2>Counting:</h2> ");
for(i = 1; i <= 15; i++){
    document.write(i + " ");
}

document.write("<h2>Reverse Counting:</h2> ");
for(i=10; i>=1; i--){
    document.write(i+" ");
}

document.write("<h2>Even:</h2> ");
for(i=0; i<=10; i++){
    document.write(i*2+" ");
}

document.write("<h2>Odd:</h2> ");
for(i=1; i<=20; i++){
    document.write(i++ +" ");
}

document.write("<h2>Series:</h2> ");
for(i=1; i<=10; i++){
    document.write(i*2+"k ");
}
*/


////// Q NO. 7

/*
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var userItem = prompt("Welcome To HS Bakery.What do you want to order Sir/Maam");
var flag = true
for (var i = 0; i < items.length; i++) {
    if (userItem === items[i]) {
        document.write(userItem + " is <strong>Available</strong> at index " + i + " is " + items[i] + "<br>");
        flag = false
    }

}
if (flag === true) {
    document.write("We are Sorry " + userItem + " is <strong>Not Available</strong> in our bakkery" + "<br>");
}
*/


////// Q NO. 8

// var number = [24, 53, 78, 91, 12];
// document.write("Array items: " + number);

// var udtNum = Math.max(...number);
// document.write("<br> The Largest number is: " + udtNum);


////// Q NO. 9

// var number2 =  [24, 53, 78, 91, 12];
// document.write("Array items: " + number2);

// document.write("<br> The Smallest Number Is: " + Math.min(...number2));


////// Q NO. 10

// for(var i = 1; i <= 20; i++){
//     document.write(i * 5 + ",");
// }