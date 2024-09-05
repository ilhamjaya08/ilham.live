import { Hono } from 'hono';
import { getGithub, getInsta, getTiktok } from './function/getSocialInfo';

export const router = new Hono();

router.get('/hello', (c) => {
  return c.json({ message: 'Hello from Hono!' });
});

router.get('/social/ig', async (c) => {
  const username = c.req.query('username')
  if (!username) {
    return c.json({ error: 'Username is required' }, 400)
  }
  const res = await getInsta(username)
  return c.json(res)
})

router.get('/social/tt', async (c) => {
  const username = c.req.query('username')
  if (!username) {
    return c.json({ error: 'Username is required' }, 400)
  }
  const res = await getTiktok(username)
  return c.json(res)
})

router.get('/social/gh', async (c) => {
  const username = c.req.query('username')
  if (!username) {
    return c.json({ error: 'Username is required' }, 400)
  }
  const res = await getGithub(username)
  return c.json(res)
})

export const api = new Hono().route('/api', router);

export type Router = typeof router;