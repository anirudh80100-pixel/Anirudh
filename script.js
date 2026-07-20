// Select elements
const messageInput = document.querySelector(".chat-input input");
const sendButton = document.querySelector(".chat-input button");
const messagesContainer = document.querySelector(".messages");

// Send message
function sendMessage() {
    const text = messageInput.value.trim();

    if (text === "") return;

    // Create sent message
    const message = document.createElement("div");
    message.classList.add("message", "sent");
    message.textContent = text;

    messagesContainer.appendChild(message);

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Clear input
    messageInput.value = "";

    // Simulate reply
    setTimeout(receiveMessage, 1000);
}

// Receive message
function receiveMessage() {
    const replies = [
        "That's great! 😊",
        "Sounds good!",
        "I understand.",
        "Can you tell me more?",
        "Awesome! 🚀",
        "Thanks for your message."
    ];

    const randomReply = replies[Math.floor(Math.random() * replies.length)];

    const reply = document.createElement("div");
    reply.classList.add("message", "received");
    reply.textContent = randomReply;

    messagesContainer.appendChild(reply);

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Button click
sendButton.addEventListener("click", sendMessage);

// Press Enter
messageInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
