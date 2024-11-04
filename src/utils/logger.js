import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current filename and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Construct the log file path
const logFilePath = path.join(__dirname, '../logs/app.log');

function log(message) {
    const timestamp = new Date().toISOString();
    fs.appendFileSync(logFilePath, `[${timestamp}] ${message}\n`);
}

export { log };