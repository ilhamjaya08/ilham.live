import { Hono } from 'hono';

export const router = new Hono();

router.get('/hello', (c) => {
  return c.json({ message: 'Hello from Hono!' });
});

export const api = new Hono().route('/api', router);

export type Router = typeof router;