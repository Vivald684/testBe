const config = {
    PORT: process.env.PORT || 3000,
    DATABASE: {
        HOST: process.env.DB_HOST || 'localhost',
        PORT: process.env.DB_PORT || 5432,
        USER: process.env.DB_USER || 'pguser',
        PASSWORD: process.env.DB_PASSWORD || 'pguser',
        DATABASE_NAME: process.env.DB_NAME || 'pguser'
    },
    CERTIFICATES: {
        CLIENT_CERT: process.env.CLIENT_CERT || './certs/client-cert.pem',
        CLIENT_KEY: process.env.CLIENT_KEY || './certs/client-key.pem',
        CA_CERT: process.env.CA_CERT || './certs/ca-cert.pem'
    },
    SYSTEM1_URL: ''
};

export default config;