import { Request, Response } from 'express';
import { createPdf } from '../utils/pdfGenerator';

export function generatePdf(req: Request, res: Response) {
    const { docDefinition } = req.body;

    if (!docDefinition) {
        return res.status(400).json({ error: 'docDefinition is required' });
    }

    createPdf(docDefinition)
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
