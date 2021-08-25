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
  "No, it's to the power of 2"
];

// get the DOM elements
let externalInput = document.querySelector("#external-input");
let messageText = document.querySelector(".message-text");
const sendButton = document.querySelector(".send-btn");
const chatTemplate = document.createElement("div");
const chatBody = document.querySelector(".chat-body");
let sender;

// show/hide typing animation
function show(){
  document.getElementById("spinner-back").classList.add("show");
  document.getElementById("spinner-front").classList.add("show");
}

function hide(){
  document.getElementById("spinner-back").classList.remove("show");
  document.getElementById("spinner-front").classList.remove("show");
}

function randomReply() {
  hide()
  sender = "CodeWomen";
  const randomIndex = Math.floor(Math.random() * replies.length);
  const randomMessage = replies[randomIndex];
  if (randomMessage) {
    chatTemplate.innerHTML = `
    <div class="left-message">
      <div class="sender">
        <img class="cw-logo" src="./images/codeWomen.png" alt="CodeWomen">
        <p class="sender-name">CodeWomen</p>
      </div>
      <div class="message-text">${randomMessage}</div>
  </div>`;
    const newMessage = chatTemplate.children[0];
    chatBody.append(newMessage);

    // make sure bottom messages and input field remain visible
    newMessage.scrollIntoView();
  }
}

function sendChat() {
  console.log("Sent", externalInput.value);
  if (externalInput) {
    sender = "WomenDev";
    chatTemplate.innerHTML = `
    <div class="right-message">
      <div class="message-content">
      <div class="sender">
        <img class="dev-logo" src="./images/woman_dev.png" alt="WomenDev">
        <p class="sender-name">WomanDev</p>
      </div>
      <div class="message-text">${externalInput.value}</div>
      </div>
    </div>`;

    const newMessage = chatTemplate.children[0];
    chatBody.append(newMessage);
    // make sure bottom messages and input field remain visible
    newMessage.scrollIntoView();

    // clear text in input field
    externalInput.value = "";
  }
  // the random reply comes after 3 seconds, to imitate that someone is writing
  show()
  setTimeout(randomReply, 3000);
}

sendButton.addEventListener("click", function () {
  sendChat();
  console.log("WHAT");
});

externalInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendChat();
  }
});
