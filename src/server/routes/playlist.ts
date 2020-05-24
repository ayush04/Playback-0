import { Router } from 'express';
import { saveSong } from '../controllers/playlist';

const router = Router();

router.post('/song/save', saveSong);

export default router;