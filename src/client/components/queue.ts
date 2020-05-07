import { Song } from "../models/song";
import { AppEvent } from '../services/event';

export class Queue {
    private static _queue: Array<Song> = new Array<Song>();
    private static _currentTrack = -1;

    static queue(song: Song): void {
        Queue._queue.push(song);
        AppEvent.emit('queue-updated');
    }

    static dequeue(): Song | undefined {
        AppEvent.emit('queue-updated');
        return Queue._queue.shift();
    }

    static next(): Song | undefined {
        if (Queue._queue[Queue._currentTrack + 1]) {
            return Queue._queue[++Queue._currentTrack];
        }
        return undefined;
    }

    static previous(): Song | undefined {
        if (Queue._queue[Queue._currentTrack - 1]) {
            return Queue._queue[--Queue._currentTrack];
        }
        return undefined;
    }

    static getCurrentQueue(): Array<Song> {
        return Queue._queue;
    }

    static updateCurrentPlayingTrack(trackId: string): void {
        Queue._currentTrack = Queue._queue.findIndex(song => song.getId() === trackId);
    }
}