// JavaScript to handle smooth scrolling
const scrollBars = document.querySelectorAll('.scroll-bar');

scrollBars.forEach(bar => {
    bar.addEventListener('click', () => {
        // Get the target section ID
        const target = document.querySelector(bar.getAttribute('data-target'));

        // Smoothly scroll to the target section
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

window.onload = function() {
    // Create the popup element
    const popup = document.createElement("div");
    popup.classList.add("promo-popup");
    popup.innerHTML = `
      <p>Limited Time Offer: 20% off on all items! <a href="#product-showcase">Shop Now</a></p>
      <button class="close-popup">Close</button>
    `;
    
    // Append the popup to the body
    document.body.appendChild(popup);
    
    // Close the popup when the close button is clicked
    document.querySelector(".close-popup").addEventListener("click", function() {
      popup.style.display = "none";
    });
    
    // Automatically hide the popup after 5 seconds
    setTimeout(function() {
      popup.style.display = "none";
    }, 5000);
  };

  document.getElementById("send-message").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    const chatbotMessages = document.getElementById("chatbot-messages");
    
    if (userInput.trim() === "") return;
  
    // Display user's message
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = userInput;
    chatbotMessages.appendChild(userMessage);
    
    // Display bot's response
    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot-message");
  
    // Simple predefined responses
    if (userInput.toLowerCase().includes("size")) {
      botMessage.textContent = "We offer sizes S, M, and L for most of our products.";
    } else if (userInput.toLowerCase().includes("sale")) {
      botMessage.textContent = "We have a 50% off sale on selected items!";
    } else if (userInput.toLowerCase().includes("boys") || userInput.toLowerCase().includes("girls")) {
      botMessage.textContent = "We have a variety of cowboy costumes for boys and girls!";
    } else {
      botMessage.textContent = "I'm here to help you with any questions about our products!";
    }
  
    chatbotMessages.appendChild(botMessage);
  
    // Scroll to the bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  
    // Clear the input field
    document.getElementById("user-input").value = "";
  });
  
  // Close the chatbot
  document.getElementById("close-chat").addEventListener("click", function() {
    document.getElementById("chatbot-container").style.display = "none";
  });