import { Song } from "./song";

export class Queue {
    private static _queue: Array<Song> = new Array<Song>();
    private static _currentTrack = -1;

    static queue(song: Song): void {
        Queue._queue.push(song);
    }

    static dequeue(): Song | undefined {
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
}