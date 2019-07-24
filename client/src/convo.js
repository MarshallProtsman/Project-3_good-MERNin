//Define variables for conversation page elements

const messages = document.getElementById("messages");
const textbox = document.getElementById("textbox");
const button = document.getElementById("button");

//Create event listener for send button

button.addEventListener("click", function() {
    const newMessage = document.createElement("li");
    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value = "";
})