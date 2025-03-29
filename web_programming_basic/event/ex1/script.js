const greetingElement = document.getElementById("greeting");
const buttonElement = document.getElementById("button");
const helloWorld = document.createElement("p");

helloWorld.textContent = "Hello world!!";
helloWorld.style.color = "red";
helloWorld.style.fontSize = "40px";

function showGreeting() {
  greetingElement.appendChild(helloWorld);
}
buttonElement.onclick = showGreeting;
