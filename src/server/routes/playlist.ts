import { Router } from 'express';
import { saveSong, getSong } from '../controllers/playlist';

const router = Router();

router.post('/song/save', saveSong);
router.get('/song/:id', getSong);

export default router;