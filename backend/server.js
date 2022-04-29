const express = require('express');
const cors = require('cors');
const path = require('path');
const expressSession = require('express-session');

const app = express();
const http = require('http').createServer(app);

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
const setupAsyncLocalStorage = require('./middlewares/setupAls.middleware');
app.all('*', setupAsyncLocalStorage);

const productRoutes = require('./api/product/routes.js');
app.use('/api/product', productRoutes);

app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

const logger = require('./services/logger.service');
const port = process.env.PORT || 3030;
http.listen(port, () => {
    logger.info('Server is running on port: ' + port);
});
