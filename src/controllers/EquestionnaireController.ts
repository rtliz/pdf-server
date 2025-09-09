import { Request, Response } from 'express';
import { createPdf } from '../utils/pdfGenerator';

export function generatePdf(req: Request, res: Response) {
    const body = req.body;

    if (!body) {
        return res.status(400).json({ error: 'body is required' });
    }

    createPdf(body)
        .then((filePath) => {
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename=document.pdf');
            res.sendFile(filePath);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Failed to generate PDF' });
        });
}
