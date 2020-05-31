import { Song } from "../models/song";
import { Storage } from '../services/storage';

export class Playlist {
    static API_PATH = 'http://localhost:3000/';

    static savePlaylist(name: String, songs: Array<String>): Promise<any> {
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

    static saveSong(song: Song): Promise<any> {
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

    static getSong(id: String): Promise<any> {
        return fetch(this.API_PATH + 'song/' + id)
            .then(response => response.json())
            .catch(err => console.log(err));
    }

    static addSongToPlaylist(id: String): Promise<any> {
        const playlistId = Storage.get('CURRENT_PLAYLIST_ID');
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

    static removeSongFromPlaylist(id: String): Promise<any> {
        const playlistId = Storage.get('CURRENT_PLAYLIST_ID');
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
}