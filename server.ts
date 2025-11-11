import http from 'node:http';
import { fileURLToPath } from 'node:url';

export const server = http.createServer((request, response) => {
  if (request.method === 'HEAD') {
    response.writeHead(200);
    response.end();
  } else if (request.method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(`Hello, world!`);
  } else {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end('Method Not Allowed');
  }
});

if (fileURLToPath(import.meta.url) === process.argv.at(1)) {
  const host = process.env.HOST ?? 'localhost';
  const port = Number.parseInt(process.env.PORT!, 10) || 3000;

  server.listen(
    {
      host,
      port,
    },
    () => {
      console.log(`Server running at http://${host}:${port}/`);
    },
  );
}
