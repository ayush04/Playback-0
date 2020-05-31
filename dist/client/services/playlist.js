"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = require("../services/storage");
class Playlist {
    static savePlaylist(name, songs) {
        return fetch(this.API_PATH + 'playlist/create/' + name, {
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
    static addSongToPlaylist(id) {
        const playlistId = storage_1.Storage.get('CURRENT_PLAYLIST_ID');
        if (playlistId) {
            return fetch(this.API_PATH + 'playlist/' + playlistId + '/add', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'songs': [id]
                })
            });
        }
        else {
            return Promise.resolve('Playlist not yet saved');
        }
    }
    static removeSongFromPlaylist(id) {
        const playlistId = storage_1.Storage.get('CURRENT_PLAYLIST_ID');
        if (playlistId) {
            return fetch(this.API_PATH + 'playlist/' + playlistId + '/remove/' + id, {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        else {
            return Promise.resolve('Playlist not yet saved');
        }
    }
    static addCurrentlyPlaying(id) {
        return fetch(this.API_PATH + 'song/add/' + id, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    static removeCurrentlyPlaying(id) {
        return fetch(this.API_PATH + 'song/remove/' + id, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
exports.Playlist = Playlist;
Playlist.API_PATH = 'http://localhost:3000/';
//# sourceMappingURL=playlist.js.map