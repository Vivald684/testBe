import axios from 'axios';
import fs from 'fs';
import path from 'path';
import https from 'https';
import config from '../config.js'

async function sendDataToSystem1(data) {
    const url = config.SYSTEM1_URL;

    // Way to CERTIFICATES
    const clientCert = fs.readFileSync(path.resolve(__dirname, '../../', config.CERTIFICATES.CLIENT_CERT));
    const clientKey = fs.readFileSync(path.resolve(__dirname, '../../', config.CERTIFICATES.CLIENT_KEY));
    const caCert = fs.readFileSync(path.resolve(__dirname, '../../', config.CERTIFICATES.CA_CERT));

    try {
        const response = await axios.put(url, data, {
            httpsAgent: new https.Agent({
                cert: clientCert,
                key: clientKey,
                ca: caCert,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        console.log('Response from System 1:', response.data);
    } catch (error) {
        console.error('Error sending data to System 1:', error);
        throw new Error('Failed to send data to System 1');
    }
}

export { sendDataToSystem1 };
