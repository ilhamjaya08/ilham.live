import Admin from '$lib/schemas/admin.model';
import {
    Hono
} from 'hono';

const admin = new Hono().basePath('/admin')

admin.post('/add', async (c) => {
    const {
        username,
        password
    } = await c.req.json()
    if (!username || !password) {
        return c.json({
            error: 'Username and password are required'
        }, 400)
    }
    const admin = new Admin({
        username,
        password
    })
    await admin.save();
    return c.json({
        message: 'Admin added successfully',
        data: {
            username,
            password
        }
    })
})

admin.get('/list', async (c) => {
    const lists = await Admin.find().select('username')
    return c.json({
        msg: 'Success',
        data: lists
    })
})

export default admin;