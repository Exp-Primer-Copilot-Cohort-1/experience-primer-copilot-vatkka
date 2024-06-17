// Create web server
// Create a web server that listens to the port 3000 and responds with the following:
// - If the URL is /, it should respond with "Hello World"
// - If the URL is /comments, it should respond with an array of comments
// - If the URL is /comments/1, it should respond with the comment with an ID of 1
// - If the URL is /comments/2, it should respond with the comment with an ID of 2
// - If the URL is not any of the above, it should respond with a 404 error

const http = require('http');

const comments = [
  { id: 1, comment: 'Hello World' },
  { id: 2, comment: 'Goodbye World' }
];

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
  } else if (req.url === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  } else if (req.url === '/comments/1') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments[0]));
  } else if (req.url === '/comments/2') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments[1]));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});