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
  "No, it's to the power of 2",
  "I don't think you get it, do you?",
  "Well, I am usually very polite",
  "What do you mean exactly?",
  "Seems like you are getting excited ...",
  "Let's cross that bridge when we get there",
  "You don't want to put all your eggs in one basket",
  "Well, that will not butter my parsnips",
  "What do you mean, this is nonsense??",
  "Well, you can always refresh",
  "You could do with some fresh air, I think",
  "It's just my humble opinion",
  "No offense, but are you sure?",
  "Whatever makes you happy, makes me happy",
  "Honestly, I could not care less",
  "What is all that about?",
  "I am just curious",
  "I'd love to contribute to this",
  "What a lovely day, isn't it?",
  "So do you enjoy your job?",
  "Are you being a bit stubborn here?",
  "No, I would not say that exactly",
  "So what is the deeper meaning of this?",
  "What is the point you are trying to make?",
  "Do you find that weird?",
  "It is all about the sunshine in your life",
  "This is an eye-opener for me",
  "I never looked at it that way",
  "Do you often have that feeling?",
  "It must be very exciting!"
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
