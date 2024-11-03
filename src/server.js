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

// connect callbackRouter
app.use('/', callbackRouter);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
