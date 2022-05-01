import express from 'express';
import cors from 'cors';

export const getStaticFilePath = (nodeEnv, filePath) => {
    if (nodeEnv === 'production') {
        return express.static(filePath);
    }
    const corsConfig = {
        origin: [
            'http://127.0.0.1:8080',
            'http://localhost:8080',
            'http://127.0.0.1:3000',
            'http://localhost:3000',
        ],
        credentials: true,
    };
    return cors(corsConfig);
};
