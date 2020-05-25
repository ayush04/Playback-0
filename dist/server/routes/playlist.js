"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playlist_1 = require("../controllers/playlist");
const router = express_1.Router();
router.post('/song/save', playlist_1.saveSong);
router.get('/song/:id', playlist_1.getSong);
router.post('/playlist/create', playlist_1.createPlaylist);
router.post('/playlist/:id/add', playlist_1.addSongToPlaylist);
router.delete('/playlist/:id/delete/:songId', playlist_1.removeSongFromPlaylist);
exports.default = router;
//# sourceMappingURL=playlist.js.map