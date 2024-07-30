import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

const connectDB = async () => {
    try {
        if (!DATABASE_URL) {
            throw new Error('DATABASE_URL environment variable is not set');
        }

        await mongoose.connect(DATABASE_URL, {
        });
        console.log('DATABASE CONNECTED SUCCESSFULLY');
    } catch (err) {
        console.error('Database connection error:', err);
        throw err;
    }
};

export default connectDB;
