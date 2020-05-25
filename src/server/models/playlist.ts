import { Schema, model } from 'mongoose';

const playlistSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    songs: [String]
});

export const Playlist = model('Playlist', playlistSchema);