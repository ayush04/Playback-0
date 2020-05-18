import { Router } from 'express';
import { alive, getSuggestions } from '../controllers/search';

const router = Router();

router.get('/alive', alive);
router.get('/search/:query', getSuggestions);

export default router;