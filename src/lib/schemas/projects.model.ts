import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tags: [{
        type: String, 
        trim: true,
        required: true
    }],
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    isOpen: {
        type: Boolean,
        required: true
    },
    sourceUrl: {
        type: String
    },
    isActive: {
        type: Boolean,
        required: true
    },
    url: [{
        type: String,
        required: true
    }],
    type: [{
        type: String,
        enum: ['web', 'mobile', 'desktop', 'chatbot', 'ai', 'ml', 'others'],
    }]
})

const Projects = mongoose.model('Projects', projectSchema);

export default Projects;