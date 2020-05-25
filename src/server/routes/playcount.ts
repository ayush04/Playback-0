import { Router } from 'express';
import { updatePlayCount } from '../controllers/playcount';

const router = Router();

router.post('/playcount/:id', updatePlayCount);

export default router;