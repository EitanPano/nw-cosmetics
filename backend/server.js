import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import expressSession from 'express-session';

dotenv.config()

const app = express();
http.createServer(app);

// Express App Config
const session = expressSession({
    secret: 'I Love Coding',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
})
app.use(express.json())
app.use(session)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '..', 'frontend', 'build')));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080','http://localhost:8080','http://127.0.0.1:3000','http://localhost:3000'],
        credentials: true,
    };
    app.use(cors(corsOptions));
}

// ROUTES
import setupAsyncLocalStorage from './middlewares/setupAls.middleware.js';
// const setupAsyncLocalStorage = require('./middlewares/setupAls.middleware');
app.all('*', setupAsyncLocalStorage);

// const productRoutes = require('./api/product/routes.js');
import productRoutes from './api/product/routes.js'
app.use('/api/product', productRoutes);

app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

// const logger = require('./services/logger.service');
import logger from './services/logger.service.js';
const port = process.env.PORT || 3030;

app.listen(port, () => {
    logger.info(`Server is running in "${process.env.NODE_ENV} Mode" on port: ` + port);
});
