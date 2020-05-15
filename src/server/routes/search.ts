import { Router } from 'express';
import { alive } from '../controllers/search';

const router = Router();

router.get('/alive', alive);
router.get('/search/:query');

export default router;