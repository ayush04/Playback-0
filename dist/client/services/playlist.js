"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Playlist {
    static savePlaylist(name, songs) {
        return fetch(this.API_PATH + 'create/' + name, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'songs': songs
            })
        })
            .then(response => response.json())
            .catch(err => console.log(err));
    }
    static saveSong(song) {
        return fetch(this.API_PATH + 'song/save', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: song.getId(),
                title: song.getTitle(),
                description: song.getDescription(),
                artistName: song.getArtistName(),
                thumbnail: song.getThumbnail(),
                videoId: song.getVideoId()
            })
        })
            .then(response => response.json())
            .catch(err => console.log(err));
    }
    static getSong(id) {
        return fetch(this.API_PATH + 'song/' + id)
            .then(response => response.json())
            .catch(err => console.log(err));
    }
}
exports.Playlist = Playlist;
Playlist.API_PATH = 'http://localhost:3000/';
//# sourceMappingURL=playlist.js.map