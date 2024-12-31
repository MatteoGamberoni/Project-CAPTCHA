const express = require('express');
const session = require('express-session');
const fetch = require('node-fetch');
const md5 = require('blueimp-md5');

const app = express();
const port = 3000;

// Set up session middleware.
app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(express.json());

 // Serve static files from 'public' directory.
app.use(express.static('public'));

// Fetch CAPTCHA and store the correct (already hashed) answers in session.
app.get('/captcha', async (req, res) => {
    try {
        const apiUrl = 'http://api.textcaptcha.com/example.json';
        const response = await fetch(apiUrl);

        // Check if the response is OK.
        if (!response.ok) {
            throw new Error(`CAPTCHA API failed with status ${response.status}`);
        }

        const data = await response.json();

        // Check if 'a' (answers) exists and is an array.
        if (!data.a || !Array.isArray(data.a)) {
            throw new Error('CAPTCHA API response does not contain valid "a" array');
        }

        // Store the pre-hashed answers directly in the session.
        req.session.captchaAnswers = data.a;

        // Send the question ('q' for question) to the client.
        res.json({ q: data.q });
    } catch (error) {
        console.error('Error fetching CAPTCHA from API:', error);

        // Fallback question in case the API request fails.
        const fallbackQuestion = 'Is ice hot or cold?';
        const fallbackAnswers = [md5('cold')];

	 // Store fallback hashed answers.
        req.session.captchaAnswers = fallbackAnswers;
	 // Send fallback question.
        res.json({ q: fallbackQuestion });
    }
});

// Validate the user's CAPTCHA answer.
app.post('/validate-captcha', (req, res) => {
    const { answer } = req.body;

    // Hash the user's input (lowercase, trimmed).
    const hashedInput = md5(answer.toLowerCase().trim());

    // Check if the hashed user input matches any of the pre-hashed answers.
    if (req.session.captchaAnswers && req.session.captchaAnswers.includes(hashedInput)) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// Start the server.
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
