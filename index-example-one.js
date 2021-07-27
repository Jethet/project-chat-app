// ARRAY WITH CHATBOT REPLIES (STRINGS)
const replies = [
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
  "I'd like to hear more about that"
];

// GET THE DOM ELEMENTS
const chat = document.getElementById("chat");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("message-send-img");

// HELPER FUNCTIONS
function sendMessage() {
  const inputValue = messageInput.value;

  displayMessage(inputValue, "Me");
  messageInput.value = "";
}

function chatbotReply() {
  const randomIndex = Math.floor(Math.random() * replies.length);
  const randomMessage = replies[randomIndex];

  displayMessage(randomMessage, "Chatbot");
}

function displayMessage(message, sender) {
  const tempDiv = document.createElement("div");

  if (sender === "Chatbot") {
    tempDiv.innerHTML = `
    <div class="message">
        <img src="./images/ironhack.png" alt="Avatar photo" class="avatar">
        <h3 class="headline">${sender}</h3>
        <p>${message}</p>
      </div>
  `;
  } else if (sender === "Me") {
    tempDiv.innerHTML = `
    <div class="message align-right">
        <img src="./images/ironhack.png" alt="Avatar photo" class="avatar">
        <h3 class="headline">Me</h3>
        <p>${message}</p>
      </div>
      `;
  }

  const newMessage = tempDiv.children[0];

  chat.appendChild(newMessage);

  chat.scrollTop = chat.scrollHeight;

  if (sender === "Me") {
    setTimeout(chatbotReply, 2000);
  }
}

// EVENT LISTENERS
sendButton.addEventListener("click", function () {
  sendMessage();
});

messageInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
