import { Pool } from 'pg';
import config from '../config';

const pool = new Pool({
    host: config.DATABASE.HOST,
    port: config.DATABASE.PORT,
    user: config.DATABASE.USER,
    password: config.DATABASE.PASSWORD,
    database: config.DATABASE.DATABASE_NAME,
});

const query = (text, params) => {
    return pool.query(text, params);
};

export { pool, query };

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
});
