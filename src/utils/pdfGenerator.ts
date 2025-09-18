import * as fs from 'fs';
import * as path from 'path';
import { getEQReviewForm } from '../pdfs/eq-review-form';
import PdfPrinter from 'pdfmake';

export function createPdf(docDefinition: any): Promise<string> {
    const fonts = {
        AP: {
            normal: 'fonts/AP-Regular.ttf',
            bold: 'fonts/AP-Bold.ttf'
        }
    };

    let document = getEQReviewForm(docDefinition)

    const printer = new PdfPrinter(fonts);
    const pdfDoc = printer.createPdfKitDocument(document);
    const filePath = path.join(process.cwd(), 'generated_pdfs', `review_form_${new Date().getTime()}.pdf`);
    const writeStream = fs.createWriteStream(filePath);

    pdfDoc.pipe(writeStream);
    pdfDoc.end();

    return new Promise((resolve, reject) => {
        writeStream.on('finish', () => {
            resolve(filePath);
        });
        writeStream.on('error', (error) => {
            reject(error);
        });
    });
}
