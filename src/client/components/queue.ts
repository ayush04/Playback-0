export class Queue {
    private static _queue: Array<string> = new Array<string>();
    private static _currentTrack = -1;

    static queue(trackId: string): void {
        Queue._queue.push(trackId);
    }

    static dequeue(): string | undefined {
        return Queue._queue.shift();
    }

    static next(): string | undefined {
        if (Queue._queue[Queue._currentTrack + 1]) {
            return Queue._queue[++Queue._currentTrack];
        }
        return undefined;
    }

    static previous(): string | undefined {
        if (Queue._queue[Queue._currentTrack - 1]) {
            return Queue._queue[--Queue._currentTrack];
        }
        return undefined;
    }
}