import { Hono } from 'hono';
import Posts from '$lib/schemas/posts.model';

const articles = new Hono().basePath('/articles')

articles.post('/create', async (c) => {
    return c.req.json
})

export default articles