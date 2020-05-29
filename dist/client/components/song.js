"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playlist_1 = require("../services/playlist");
class Song {
    /* static saveSong(id: String, title: String, description: String,
        artistName: String, thumbnail: String, videoId: String): void {
        Playlist.saveSong({
            id: id,
            title: title,
            description: description,
            artistName: artistName,
            thumbnail: thumbnail,
            videoId: videoId
        }).then(response => console.log(response))
        .catch(err => console.log(err));
    } */
    static savePlayListInDB(name, songs) {
        playlist_1.Playlist.savePlaylist(name, songs)
            .then(response => {
            console.log(response);
        })
            .catch(err => console.log(err));
    }
}
exports.Song = Song;
//# sourceMappingURL=song.js.map