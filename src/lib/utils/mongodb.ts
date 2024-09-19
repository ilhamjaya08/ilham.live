import mongoose from 'mongoose'

const MONGO_URI = 'mongodb+srv://milhamjaya1808:ilhamjaya@portfolioblog.wpioegs.mongodb.net/?retryWrites=true&w=majority&appName=portfolioblog';



export default function connectMongo() {
    mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
}