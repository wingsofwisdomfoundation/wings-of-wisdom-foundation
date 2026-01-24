import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

interface EnvConfig {
    razorpayKeyId: string;
    razorpayKeySecret: string;
    port: number;
    nodeEnv: string;
    frontendUrl: string;
}

function getEnvVariable(key: string, required: boolean = true): string {
    const value = process.env[key];
    if (required && !value) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
    return value || '';
}

export const config: EnvConfig = {
    razorpayKeyId: getEnvVariable('RAZORPAY_KEY_ID'),
    razorpayKeySecret: getEnvVariable('RAZORPAY_KEY_SECRET'),
    port: parseInt(getEnvVariable('PORT', false) || '5000', 10),
    nodeEnv: getEnvVariable('NODE_ENV', false) || 'development',
    frontendUrl: getEnvVariable('FRONTEND_URL', false) || 'http://localhost:8080',
};
