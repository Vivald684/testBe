import { Router } from 'express';
import basicAuth from 'express-basic-auth';
import { processData } from '../services/dataProcessor.js';
import { log } from '../utils/logger.js';

const router = Router();

const authConfig = {
    'user1': 'password1',
    'user2': 'password2',
};

router.post('/api/callback', basicAuth({ users: authConfig }), async (req, res) => {
    const data = req.body;
    const user = req.auth.user;

    log(`Received callback from user: ${user}`);

    try {
        await processData(data, user); 
        res.sendStatus(200); 
    } catch (error) {
        log(`Error processing data: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
