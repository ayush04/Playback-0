"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const song_1 = require("../models/song");
exports.saveSong = (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const artistName = req.body.artistName;
    const thumbnail = req.body.thumbnail;
    const videoId = req.body.videoId;
    const song = new song_1.Song({
        id: id,
        title: title,
        description: description,
        artistName: artistName,
        thumbnail: thumbnail,
        videoId: videoId
    });
    song.save().then(response => {
        return res.status(201).json(response);
    })
        .then(err => {
        return res.status(400).json(err);
    });
};
exports.getSong = (req, res) => {
    const id = req.params.id;
    song_1.Song.find({ id: id }).then(song => {
        return res.status(200).json(song);
    })
        .then(err => {
        return res.status(400).json(err);
    });
};
//# sourceMappingURL=playlist.js.map