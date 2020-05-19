import { Router } from 'express';
import { getAPIKey, getClientId } from '../controllers/secret';

const router = Router();

router.get('/secret/id', getClientId);
router.get('/secret/key', getAPIKey);

export default router;