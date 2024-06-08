// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('hola munda!\n');
});

// starts a simple http server locally on port 3000
server.listen(8092, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:8092');
});

// run with `node server.mjs`
