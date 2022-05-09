import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';

// Config Files
import { session } from './config/session-config.js';
import { getStaticFilePath } from './config/static-file-config.js';

import dotenv from 'dotenv';
dotenv.config();

const { PORT = 3030, NODE_ENV } = process.env;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
createServer(app);

app.use(express.json());
app.use(session);
app.use(getStaticFilePath(NODE_ENV, path.resolve(__dirname, '..', 'frontend', 'build')));

// Routes Middlewares
import setupAsyncLocalStorage from './middlewares/setupAls.middleware.js';
app.all('*', setupAsyncLocalStorage);

// Routes
import productRoutes from './api/product/routes.js';
app.use('/api/product', productRoutes);

import authRoutes from './api/auth/routes.js';
app.use('/api/auth', authRoutes);

import userRoutes from './api/user/routes.js';
app.use('/api/user', userRoutes);

import reviewRoutes from './api/review/routes.js';
app.use('/api/review', reviewRoutes);

// import orderRoutes from './api/order/routes.js';
// app.use('/api/order', orderRoutes)

app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

import logger from './services/logger.service.js';
import { toUpperFirst } from './services/util.service.js';

app.listen(PORT, () => {
    logger.info(`${toUpperFirst(NODE_ENV)} Server running on port: ` + PORT);
});
