import { Schema, model } from 'mongoose';
import { Song } from './song';

const playlistSchema = new Schema({
    songs: [Song]
});

export const Playlist = model('Playlist', playlistSchema);