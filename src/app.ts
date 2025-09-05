import express from 'express';
import bodyParser from 'body-parser';
import pdfRoutes from './routes/pdf';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', pdfRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
