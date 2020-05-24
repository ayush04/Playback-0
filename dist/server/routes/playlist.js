"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playlist_1 = require("../controllers/playlist");
const router = express_1.Router();
router.post('/song/save', playlist_1.saveSong);
exports.default = router;
//# sourceMappingURL=playlist.js.map