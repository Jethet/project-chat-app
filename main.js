import replies from "./replies.js"

// get the DOM elements
let externalInput = document.querySelector("#external-input");
const sendButton = document.querySelector(".send-btn");
const chatTemplate = document.createElement("div");
const chatBody = document.querySelector(".chat-body");
let text

// show/hide typing animation
function show() {
  document.getElementById("spinner-back").classList.add("show");
  document.getElementById("spinner-front").classList.add("show");
}

function hide() {
  document.getElementById("spinner-back").classList.remove("show");
  document.getElementById("spinner-front").classList.remove("show");
}

function randomReply() {
  hide();
  // sender = "CodeWomen";
  const randomIndex = Math.floor(Math.random() * replies.length);
  const randomMessage = replies[randomIndex];
  
  if (randomMessage) {
    const index = replies.indexOf(randomMessage);
    replies.splice(index, 1);

    chatTemplate.innerHTML = `
    <div class="left-message">
      <div class="sender">
        <img class="person-a" src="./images/personA.png" alt="Chatbuddy">
        <p class="sender-name">Your friendly Chatbuddy</p>
      </div>
      <div class="message-text">${randomMessage}</div>
    </div>`;
    
    const newMessage = chatTemplate.children[0];
    chatBody.append(newMessage);

    // make sure bottom messages and input field remain visible
    newMessage.scrollIntoView();
  } else {
    console.log("bye");
  }
  return randomMessage
}

// function typeWriter(randomMessage) {
//   let i = 0
//   let speed = 50
//   if (i < randomMessage.length) {
//     randomMessage += randomMessage.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
//   console.log(text);
  
// }

function sendChat() {
  if (externalInput) {
    // sender = "WomenDev";
    chatTemplate.innerHTML = `
    <div class="right-message">
      <div class="message-content">
      <div class="sender">
        <img class="person-b" src="./images/personB.png" alt="Yourself">
        <p class="sender-name">You</p>
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
  show();
  setTimeout(randomReply, 3000);
  // typeWriter()
}

sendButton.addEventListener("click", function () {
  sendChat();
});

externalInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendChat();
  }
});
