// INDEX.js
const express = require('express'); // import Express
const app = express(); // create an Express app
const port = 3000;

// Example route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});




