const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// In-memory data store (replace with a database in a production environment)
const users = [];

app.use(bodyParser.json());

// Endpoint to handle user signup
app.post('/signup', (req, res) => {
    const { username, password, email } = req.body;

    // Check if the username already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'Username already exists. Please choose a different username.' });
    }

    // Store the user in the in-memory data store
    users.push({ username, password, email });
`1
    return res.status(201).json({ message: 'User successfully registered.' });
});

// Endpoint to handle user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find the user in the in-memory data store
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password.' });
    }

    return res.status(200).json({ message: 'Login successful.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
