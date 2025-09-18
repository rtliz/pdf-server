import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import pdfRoutes from './routes/pdf';

// Simple API key check middleware
function apiKeyCheck(req, res, next) {
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== process.env.API_KEY) {
        return res.status(401).json({ error: 'Invalid API key' });
    }
    next();
}


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json());

// Root route to display "heltechack"
app.get('/', (req, res) => {
    res.send('health check nodejs eqn start');
});

app.use('/', apiKeyCheck, pdfRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
