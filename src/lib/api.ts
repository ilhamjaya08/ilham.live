import { Hono } from 'hono';
import social from './apis/social';
import admin from './apis/admin';
import projects from './apis/projects';

export const router = new Hono();

router.route('/', social)
router.route('/', admin)
router.route('/', projects)

router.get('/hello', (c) => {
  return c.json({ message: 'Hello from Hono!' });
});

export const api = new Hono().route('/api', router);

export type Router = typeof router;