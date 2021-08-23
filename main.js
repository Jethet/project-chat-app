// import { replies } from "./replies";

// create message elements that are added as nodes/child elements

// the class should be message-left if the message is a hard-coded message that
//   is randomly taken from the 'replies' array
// the class should be message-right if the message is entered dynamically by the user

// the input area needs to have functionality: message text to be grabbed and added
//    to the message-right element and button submit function

let replies = [
  "Hello, Welcome to your personal Chat App!",
  "Some coding a day keeps the bugs away!",
  "Thank you for your visit. See you soon!",
  "Goodbye!",
  "Nooo way! Same here!!!",
  "How does that feel on a scale from 1 to 10 ?",
  "Hmmmm ... interesting!",
  "That could be a problem.",
  "Do not go to the bathroom in a dream. It’s a trap!",
  "It does make sense.",
  "Why is that?",
  "Who?",
  "That's great!",
  "Whatever you say",
  "I'd like to hear more about that",
  "Mm-mm, so what are you saying?",
];

// get the DOM elements
let externalInput = document.querySelector("#external-message");
let messageText = document.querySelector(".message-text");
const sendButton = document.querySelector(".send-btn");

function randomReply() {
  const randomIndex = Math.floor(Math.random() * replies.length);
  const randomMessage = replies[randomIndex];
  return randomMessage;
}

function sendChat() {
  console.log("Sent", externalInput.value);

  let sender;
  const chatTemplate = document.createElement("div");

  if (sender === "WomenDev") {
    chatTemplate.innerHTML = `
    <div class="right-message">
      <div class="sender">
        <img class="dev-logo" src="./images/woman_dev.png" alt="WomenDev">
        <p class="sender-name">WomanDev</p>
      </div>
      <div class="message-text">${externalInput.value}</div>
    </div>`;
    sender = "CodeWomen";
  }

  if (sender === "CodeWomen") {
    chatTemplate.innerHTML = `
    <div class="left-message">
      <div class="sender">
        <img class="dev-logo" src="./images/codeWomen.png" alt="CodeWomen">
        <p class="sender-name">CodeWomen</p>
      </div>
      <div class="message-text">${randomMessage}</div>
  </div>`;
    sender = "WomanDev";
  }
}

sendButton.addEventListener("click", sendChat());

externalInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendChat();
  }

// clear text in input field
document.querySelector("#external-message").innerHTML = ""
