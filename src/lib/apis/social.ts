import { Hono } from 'hono'
import { getGithub, getInsta, getTiktok } from '../function/getSocialInfo';

const social = new Hono().basePath('/social')

social.get('/ig', async (c) => {
    const username = c.req.query('username')
    if (!username) {
        return c.json({
            error: 'Username is required'
        }, 400)
    }
    const res = await getInsta(username)
    return c.json(res)
})

social.get('/tt', async (c) => {
    const username = c.req.query('username')
    if (!username) {
        return c.json({
            error: 'Username is required'
        }, 400)
    }
    const res = await getTiktok(username)
    return c.json(res)
})

social.get('/gh', async (c) => {
    const username = c.req.query('username')
    if (!username) {
        return c.json({
            error: 'Username is required'
        }, 400)
    }
    const res = await getGithub(username)
    return c.json(res)
})

export default social