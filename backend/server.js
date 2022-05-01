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

// Load Static File
app.use(getStaticFilePath(NODE_ENV, __dirname, '../frontend/build'));

// Routes Middlewares
import setupAsyncLocalStorage from './middlewares/setupAls.middleware.js';
app.all('*', setupAsyncLocalStorage);

// Routes
import productRoutes from './api/product/routes.js';
app.use('/api/product', productRoutes);

app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

import logger from './services/logger.service.js';
app.listen(PORT, () => {
    logger.info(`Server is running in "${NODE_ENV} Mode" on port: ` + PORT);
});
