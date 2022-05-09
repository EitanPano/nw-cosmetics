import dotenv from 'dotenv'
dotenv.config()

export const dbURL = process.env.NODE_ENV === 'production'
        ? process.env.DB_URL
        : 'mongodb://localhost:27017';
