import { Router } from 'express';
import {
    saveSong, getSong, createPlaylist, addSongToPlaylist,
    removeSongFromPlaylist, addCurrentlyPlaying, removeCurrentlyPlaying, getAllCurrentlyPlayingSongs
} from '../controllers/playlist';

const router = Router();

router.post('/song/save', saveSong);
router.get('/song/playing', getAllCurrentlyPlayingSongs);
router.get('/song/:id', getSong);
router.post('/playlist/create/:name', createPlaylist);
router.post('/playlist/:id/add', addSongToPlaylist);
router.delete('/playlist/:id/delete/:songId', removeSongFromPlaylist);
router.post('/song/add/:id', addCurrentlyPlaying);
router.delete('/song/remove/:id', removeCurrentlyPlaying);

export default router;