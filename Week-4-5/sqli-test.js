const express = require('express');
const helmet = require('helmet'); // Naya security middleware
// ... baki imports

const app = express();

// Helmet ko sab se upar lagayein
app.use(helmet()); 

// ... baki middleware (cookie-parser, etc.)
const express = require('express');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const app = express();

// Middlewares
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// CSRF Protection Setup
const csrfProtection = csrf({ cookie: true });

// 1. GET Route - Yeh ab kaam karega!
app.get('/form', csrfProtection, (req, res) => {
    const token = req.csrfToken();
    res.send({ 
        message: "CSRF Token Generated", 
        csrfToken: token,
        instructions: "Copy this token and use it in your POST request header or body."
    });
});

// 2. POST Route - Isay protect karna hai
app.post('/login', csrfProtection, (req, res) => {
    res.send("✅ Success! CSRF Token was valid.");
});

// Error handling for missing CSRF token
app.use((err, req, res, next) => {
    if (err.code !== 'EBADCSRFTOKEN') return next(err);
    res.status(403).send('❌ CSRF Attack Blocked! Valid token is required.');
});

app.listen(5000, () => {
    console.log('Server is live on http://127.0.0.1:5000');
    console.log('Access http://127.0.0.1:5000/form to get your token.');
});
