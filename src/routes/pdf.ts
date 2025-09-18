import { Router } from 'express';
import { generatePdf } from '../controllers/EquestionnaireController';

const router = Router();

router.post('/paper-form', generatePdf);

export default router;
