import { sendDataToSystem1 } from './sendDataToSystem1.js';

async function processData(data, user) {
    // Обработка данных в зависимости от пользователя
    if (user === 'user1') {
        // Обработка для user1
        const processedData = {
            externalId: data.payload.identityVerificationId,
            firstName: data.payload.document.firstName,
            lastName: data.payload.document.lastName,
            state: data.payload.status,
        };
        await sendDataToSystem1(processedData);
    } else if (user === 'user2') {
        // Обработка для user2
        const processedData = {
            externalId: data.payload.identityVerificationId,
            firstName: data.payload.document.firstName,
            lastName: data.payload.document.lastName,
            state: data.payload.status,
        };
        await sendDataToSystem1(processedData);
    } else {
        throw new Error('Unknown user');
    }
}

export { processData };
