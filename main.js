// create message elements that are added as nodes/child elements

// the class should be message-left if the message is a hard-coded message that
//   is randomly taken from the 'replies' array
// the class should be message-right if the message is entered dynamically by the user

// the input area needs to have functionality: message text to be grabbed and added
//    to the message-right element and button submit function

import replies from "./replies";

let user;
let chat = document.querySelector(".external-message").innerHTML;

function displayChat() {
  const template = document.createElement("div");

  if (sender === "WomenDev") {
    template.innerHTML = `
    <div class="right-message">
      <div class="sender">
        <img class="dev-logo" src="./images/woman_dev.png" alt="WomenDev">
        <p class="sender-name">WomanDev</p>
      </div>
      <div class="message-text">${chatMessage}</div>
    </div>`;
  }

  if (sender === "CodeWomen") {
    template.innerHTML = `
    <div class="left-message">
      <div class="sender">
        <img class="dev-logo" src="./images/codeWomen.png" alt="CodeWomen">
        <p class="sender-name">CodeWomen</p>
      </div>
      <div class="message-text">${chatMessage}</div>
  </div>`;
  }
}
