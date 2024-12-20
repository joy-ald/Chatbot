function sendMessage() {
    let userInput = document.getElementById('userInput').value;
    let chatlog = document.getElementById('chatlog');

    // Display the user input in chatlog
    let userMessage = document.createElement('div');
    userMessage.textContent = 'User: ' + userInput;
    chatlog.appendChild(userMessage);

    // Generate bot response (basic)
    let botMessage = document.createElement('div');
    botMessage.textContent = 'Bot: ' + getBotResponse(userInput);
    chatlog.appendChild(botMessage);

    // Clear input field
    document.getElementById('userInput').value = '';
}

function getBotResponse(input) {
    // List of keywords to trigger responses
    const greetings = ['hello', 'hey', 'hi', 'whatsup', 'howdy', 'greetings'];

    // Convert input to lowercase to make it case-insensitive
    input = input.toLowerCase();

    // Check if input contains any of the greetings
    for (let greeting of greetings) {
        if (input.includes(greeting)) {
            return 'Hi there! How can I help you today?';
        }
    }

    // Default response if no match is found
    return 'Sorry, I didn\'t understand that.';
}

// Add event listener for the Enter key
document.getElementById('userInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage(); // Trigger sendMessage function on Enter
    }
});
