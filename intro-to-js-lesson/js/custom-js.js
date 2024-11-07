//comment

document.addEventListener('DOMContentLoaded', (loaded) => {
//now we test
console.log('Worked');
let a = 200; 
let b = 180;
let c = a + b;
//const is a variable that cannot be changed
const value1 = 500;
const value2 = 600;
let total = value1 + value2;

document.getElementById("ex1").innerHTML = "<h4> Javascript Variables </h4>" +"<p> Let: The Value of C is " + c + "</p>" + "<p> Const: The Total is: " + total +"</p>";
// we can see our html lets style it
document.getElementById("ex1").style.color = "#f8f8f8";
document.getElementById("ex1").style.padding = "0% 10%";//0 to top and bottom 10 to left and right
//now we style header
document.getElementById("lesson-global-header").innerHTML = 
"<div id ='logo-container'>" +
"<a href = 'index.html'>"+
"<img id = 'logo' src = './img/logo.png' alt = 'header logo'>"+
"</a>"+
"</div>" +
"<nav> <menu>" +
"<li> <a href ='#'> Item 1</a> </li>" +
"<li> <a href ='#'> Item 1</a> </li>"+
"<li> <a href ='#'> Item 1</a> </li>"+
"<menu> </nav>";

document.getElementById("lesson-global-header").style.cssText = "display: flex; height: 125px; background-color: #f8f8f8; align-items: center;";
document.getElementById("logo-container").style.cssText = "flex-grow: 1; height: 110px; width: auto;";
document.getElementById("logo").style.cssText = "width: auto; height: 100%;";
console.log('Welcome to the website');
document.getElementById("main").innerHTML = "<section><h5>Hi this is new</h5><section>"+
"<section><p> loremipsoaswaisjaiwjsijasjiajwiajsisjiaj</p></section>"
+"<img id = 'logo' src = './img/logo.png' alt = 'logothing'>";
document.getElementById("main").style.cssText = "display: flex; height: 125px; background-color: #f8f8f8; align-items: center;";
});

