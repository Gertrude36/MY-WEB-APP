// index.js
const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const users = {
  'user1': 'password123',
  'user2': 'securepassword'
};

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  const pathname = reqUrl.pathname;

  // Handle login request
  if (pathname === '/login' && req.method === 'GET') {
    const username = reqUrl.query.username;
    const password = reqUrl.query.password;

    if (users[username] && users[username] === password) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Login successful');
    } else {
      res.statusCode = 401;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Invalid username or password');
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Route not found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

