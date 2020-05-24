"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const song_1 = require("./song");
const playlistSchema = new mongoose_1.Schema({
    songs: [song_1.Song]
});
exports.Playlist = mongoose_1.model('Playlist', playlistSchema);
//# sourceMappingURL=playlist.js.map