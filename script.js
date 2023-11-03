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

let div = document.createElement("div");
div.innerHTML = "<p>hello world</p>";
console.log(div);
document.body.appendChild(div);
div.id = "title";
