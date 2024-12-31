function validateCaptcha() {
    const captchaCode = document.getElementById("CaptchaCode").value;

    // Send the CAPTCHA code to the server via a POST request
    fetch('index.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `CaptchaCode=${encodeURIComponent(captchaCode)}`
    })
    .then(response => response.json())
    .then(data => {
        const resultMessage = document.getElementById("resultMessage");

        if (data.success) {
            resultMessage.textContent = data.message;
            resultMessage.style.color = "green";
        } else {
            resultMessage.textContent = data.message;
            resultMessage.style.color = "red";
        }
    })
    .catch(error => {
        console.error('Error validating CAPTCHA:', error);
    });
}
