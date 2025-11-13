// index.js

const express = require('express');
const app = express();
const port = 3000;

// Existing routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Add new route for "/about"
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

