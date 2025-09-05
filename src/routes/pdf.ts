import { Router } from 'express';
import { generatePdf } from '../controllers/EquestionnaireController';

const router = Router();

router.post('/equestionnaire/review-form', generatePdf);

export default router;
