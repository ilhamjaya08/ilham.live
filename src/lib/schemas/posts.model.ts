import mongoose from 'mongoose';

const postsSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true, 
      trim: true 
    },
    category: {
      type: Number,
      required: true  
    },
    content: {
      type: String, 
      required: true
    },
    author: {
      type: String,
      required: true,
      trim: true
    },
    slug: {
      type: String,
      required: true,
      unique: true, 
      lowercase: true,
      trim: true
    },
    tags: [{
      type: String, 
      trim: true
    }],
    createdAt: {
      type: Date, 
      default: Date.now 
    },
    updatedAt: {
      type: Date, 
      default: Date.now 
    },
    published: {
      type: Boolean, 
      default: false
    },
    views: {
      type: Number, 
      default: 0
    },
    metaDescription: {
      type: String, 
      trim: true
    },
    featuredImage: {
      type: String, 
      trim: true
    }
  }, { timestamps: true });
  
postsSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});

const Posts = mongoose.model('Posts', postsSchema); 

export default Posts