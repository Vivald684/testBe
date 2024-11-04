import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import callbackRouter from './routes/callback.js';
import { log } from './utils/logger.js';
import config from './config.js';

const app = express();
const PORT = config.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Logging every request
app.use((req, res, next) => {
    log(`Received ${req.method} request for ${req.url}`);
    next();
});

// Connect callbackRouter
app.use('/', callbackRouter);

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging
    log(`Internal Server Error: ${err.message}`); // Log the error message

    // Respond with a generic error message
    res.status(500).json({ 
        message: 'Internal Server Error', 
        error: process.env.NODE_ENV === 'development' ? err.message : undefined 
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
