import { test } from 'node:test';

import request from 'supertest';

import { server } from './server.ts';

test('http server test', async () => {
  await request(server)
    .get('/')
    .expect(200)
    .expect('Content-Type', 'text/plain')
    .expect('Hello, world!');
});
