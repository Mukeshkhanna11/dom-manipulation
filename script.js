/*let mssge = document.getElementsByTagName("h1");
console.log(mssge);*/

/*let message1 = document.getElementById("container");
console.log(message1);
let message2 = message1.getElementsByClassName("message");
console.log(message2);*/

/*let message3 = document.querySelector(".message");
console.log(message3);
let message4 = document.querySelectorAll(".message");
console.log(message4);
let messge = document.querySelectorAll("#container");
console.log(messge);
let message6 = document.querySelectorAll("div h1");
console.log(message6);
let message7 = document.querySelectorAll("div,h1");
console.log(message7);*/

/*let parent = document.querySelector(".title");
console.log(parent.firstChild);
console.log(parent.firstElementChild);
console.log(parent.childNodes);
let second = document.querySelector(".second");
console.log(second.previousElementSibling);
console.log(second.nextElementSibling);
console.log(parent.lastElementChild);*/

/*let div = document.createElement("div");
div.innerHTML = "<p>hello world</p>";
console.log(div);
document.body.appendChild(div);
div.id = "title";*/

/*let menu = document.getElementById("menu");
let list = document.createElement("li");
list.innerHTML = "intro";
menu.appendChild(list);*/
let menu = document.getElementById("menu");
//console.log(menu.textContent);
//menu.innerHTML = "<h1>heading </h1>";
/*menu.insertAdjacentHTML("afterbegin", "<li>intro</li>");
menu.insertAdjacentHTML("beforebegin", "<li>like</li>");
menu.insertAdjacentHTML("beforeend", "<li>subscribe</li>");
menu.insertAdjacentHTML("afterend", "<li>share</li>");*/
//menu.removeChild(menu.firstElementChild);
///console.log(menu);
///get attribute set attribute
/*let inputBox = document.getElementById("username");
console.log(inputBox.getAttribute("placeholder"));
inputBox.setAttribute("class", "user");
console.log(inputBox);
console.log(inputBox.hasAttribute("class"));*/

//class name and class list
/*let title = document.getElementById("title");
title.className += " new";
console.log(title);
console.log(title.classList);
title.classList.remove("mssge");
console.log(title);
title.classList.replace("main", "proper");
console.log(title);
console.log(title.classList.contains("new"));
title.classList.toggle("name");*/
//event bubbling- event starts from most specific element and flows
//towards least specific element//buttion to div to body to html to doctype
//event capturing- event starts from least specific element and flows
//towards most specific element//doctype to html to body to div to button
//event handles or event listeners means it is a piece of code which wil be executed
//after doing a certain event

/*unction displayMssge() {
  console.log("hi there how are youuuuuu");
}*/
let btn = document.getElementById("btn");
/*btn.addEventListener("click", function () {
  console.log("button clicked");
});*/
function displayMssge() {
  console.log("button clicked ");
}
btn.addEventListener("click", displayMssge);
