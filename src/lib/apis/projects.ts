import Projects from '$lib/schemas/projects.model';
import { Hono } from 'hono';

const projects = new Hono().basePath('/projects');

projects.get('/list', async (c) => {
    const projects = await Projects.find();
    return c.json({
        msg: 'success',
        data: projects
    })
})

projects.post('/add', async (c) => {
    const { title, description, image, tags, url, isOpen, sourceUrl, isActive, type } = await c.req.json();

    try {
        const project = new Projects({
            title,
            tags,
            description,
            image,
            sourceUrl,
            url,
            isOpen,
            isActive,
            type
        })
        await project.save();

        return c.json({
            msg: 'success',
            data: project
        })
    } catch(err) {
        return c.json({
            msg: 'failed',
            data: err
        })
    }
})

export default projects;