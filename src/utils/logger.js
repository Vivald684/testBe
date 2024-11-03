import fs from 'fs';
import path from 'path';

const logFilePath = path.join(__dirname, '../logs/app.log');

function log(message) {
    const timestamp = new Date().toISOString();
    fs.appendFileSync(logFilePath, `[${timestamp}] ${message}\n`);
}

export { log };