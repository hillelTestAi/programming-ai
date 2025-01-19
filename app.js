function sendMessage() {
    let userMessage = document.getElementById("user-input").value;
    if (userMessage.trim()) {
        addMessage(userMessage, 'user');
        document.getElementById("user-input").value = ''; // Clear input field

        fetch(`https://195.179.229.119/gpt/api.php?prompt=${encodeURIComponent(userMessage)}&api_key=56e5a497a2286ae13c100e1d0b84c58b&model=gpt-4`)
            .then(response => response.json())
            .then(data => {
                addMessage(data.response, 'bot');
            })
            .catch(error => console.error('Error:', error));

    }
}

function addMessage(message, sender) {
    let chatbox = document.getElementById("chatbox");
    let messageElement = document.createElement("div");
    messageElement.className = 'message ' + sender;
    messageElement.innerText = message;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}
