const mysql = require('mysql2');

// Connect using environment variables
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'testdb'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

// Basic HTTP server
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello from Node.js + MySQL Docker Compose app!');
});

server.listen(3000, () => console.log('Server running on port 3000'));

