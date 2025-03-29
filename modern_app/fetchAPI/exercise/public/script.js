const chats = Array.from(document.getElementsByClassName("chat"));
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const leftInput = document.getElementById("leftInput");
const rightInput = document.getElementById("rightInput");

setInterval(async () => {
  const response = await fetch("/messages");
  const messages = await response.json();
  chats.forEach((chat) => (chat.innerHTML = ""));

  for (const message of messages) {
    chats.forEach((chat) => {
      const li = document.createElement("li");
      li.textContent = message;
      chat.appendChild(li);
    });
  }
}, 1000);

leftButton.onclick = async () => {
  const message = leftInput.value || "";
  const body = JSON.stringify({ message: message });
  await fetch("/send", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: body,
  });
};

rightButton.onclick = async () => {
  const message = rightInput.value || "";
  const body = JSON.stringify({ message: message });
  await fetch("/send", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: body,
  });
};
