import replies from "./replies.js"

// get the DOM elements
let externalInput = document.querySelector("#external-input");
let messageText = document.querySelector(".message-text");
const sendButton = document.querySelector(".send-btn");
const chatTemplate = document.createElement("div");
const chatBody = document.querySelector(".chat-body");
let sender;

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
  sender = "CodeWomen";
  const randomIndex = Math.floor(Math.random() * replies.length);
  const randomMessage = replies[randomIndex];

  if (randomMessage) {
    const index = replies.indexOf(randomMessage);
    replies.splice(index, 1);

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
  } else {
    console.log("bye");
  }
}

function sendChat() {
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
  show();
  setTimeout(randomReply, 3000);
}

sendButton.addEventListener("click", function () {
  sendChat();
});

externalInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendChat();
  }
});
