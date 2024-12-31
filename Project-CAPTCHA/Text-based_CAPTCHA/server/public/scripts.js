// Fetch and display CAPTCHA question.
function fetchCaptcha() {
    // Add a random query parameter to the URL to prevent caching.
    const uniqueUrl = `/captcha?nocache=${new Date().getTime()}`;

    fetch(uniqueUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('captchaQuestion').innerText = data.q;  // Display CAPTCHA question
            document.getElementById('captchaAnswer').value = '';  // Clear the input field for the new challenge
        })
        .catch(error => {
            console.error('Error fetching CAPTCHA:', error);
        });
}

// Validate CAPTCHA answer on button click.
async function validateCaptcha() {
    const userAnswer = document.getElementById('captchaAnswer').value;
    const response = await fetch('/validate-captcha', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ answer: userAnswer })
    });

    const result = await response.json();
    const messageElement = document.getElementById('resultMessage');
    if (result.success) {
        messageElement.innerText = 'CAPTCHA passed!';
    } else {
        messageElement.innerText = 'Incorrect CAPTCHA answer. Please try again.';
    }
}

// Call fetchCaptcha on page load.
window.onload = fetchCaptcha;

// Handle button click to fetch a new CAPTCHA without reloading the page.
function buttonTwoClick() {
    fetchCaptcha();
}

// Count requests and display on the page.
let requestCount = localStorage.getItem('requestCount') || 0;
document.getElementById('requestCount').innerText = requestCount;

requestCount++;
localStorage.setItem('requestCount', requestCount);
document.getElementById('requestCount').innerText = requestCount;

// Display random text when button is pressed.
function buttonOneClick() {
    const messages = [
        "Hello, World!",
        "Welcome to the project!",
        "Enjoy exploring CAPTCHA!",
        "This is a random message.",
        "Keep up the great work!"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('randomMessage').innerText = randomMessage;
}
