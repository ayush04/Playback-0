import { Router } from 'express';
import { saveSong, getSong, createPlaylist, addSongToPlaylist } from '../controllers/playlist';

const router = Router();

router.post('/song/save', saveSong);
router.get('/song/:id', getSong);
router.post('/playlist/create', createPlaylist);
router.post('/playlist/:id/add', addSongToPlaylist);

export default router;