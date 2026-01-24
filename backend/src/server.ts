import express from 'express';
import cors from 'cors';
import { config } from './config/env.js';
import paymentRoutes from './routes/paymentRoutes.js';

const app = express();

app.use(cors({
    origin: config.frontendUrl,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.get('/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/payments', paymentRoutes);

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error('[Server Error]', err.message);
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(config.port, () => {
    console.log(`
╔════════════════════════════════════════════════════╗
║     NGO Payment Server Started                     ║
╠════════════════════════════════════════════════════╣
║  Port:     ${config.port.toString().padEnd(40)}║
║  Mode:     ${config.nodeEnv.padEnd(40)}║
║  Frontend: ${config.frontendUrl.padEnd(40)}║
╚════════════════════════════════════════════════════╝
  `);
});
