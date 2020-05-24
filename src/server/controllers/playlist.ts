import { RequestHandler, Request, Response } from 'express';
import { Song } from '../models/song';

export const saveSong: RequestHandler = (req: Request, res: Response) => {
    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const artistName = req.body.artistName;
    const thumbnail = req.body.thumbnail;
    const videoId = req.body.videoId;

    const song = new Song({
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
}