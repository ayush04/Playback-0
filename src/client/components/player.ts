import YouTubePlayer from 'yt-player';

import { Queue } from './queue';
import { Song } from '../models/song';
import { ProgressBar } from './progess-bar';
import { Utils } from '../services/utils';

export class Player extends YouTubePlayer {
    private static player: Player;
    private static _isPlaying: boolean;
    private static _currentTrackId: string;
    private progress: ProgressBar | null = null;

    private constructor(domElID: string) {
        super(domElID);
    }

    static getInstance(domElID: string): Player {
        if (!Player.player) {
            Player.player = new Player(domElID);
        }
        return Player.player;
    };

    private loadTrack(trackId: string): void {
        Player._currentTrackId = trackId;
        Player.player.load(trackId);
    }

    playTrack(trackId?: string): void {
        if (trackId) {
            this.stopTrack();
            this.loadTrack(trackId);
            Queue.updateCurrentPlayingTrack(trackId);
        }
        if (!Player._currentTrackId) {
            let track = Queue.next();
            if (track) {
                this.loadTrack(track.getVideoId()!);
                Player._isPlaying = true;
                this.togglePlay();
                Player.player.play();
                this.updateElapsedTime();
            }
            else {
                console.log('No tracks to play');
            }
        }
        else {
            Player._isPlaying = true;
            this.togglePlay();
            Player.player.play();
            this.updateElapsedTime();
        }
    }

    queueAndPlay(song: Song): void {
        Queue.queue(song);
        if (Player._isPlaying) {
            this.pauseTrack();
            this.resetElapsedTime();
        }
        this.loadTrack(song.getVideoId()!);
        Queue.updateCurrentPlayingTrack(song.getId());
        Player._isPlaying = true;
        this.togglePlay();
        Player.player.play();
        this.updateElapsedTime();
    }

    pauseTrack(): void {
        Player._isPlaying = false;
        Player.player.pause();
        this.togglePlay();
        this.stopTimer();
        if (this.progress) {
            this.progress.stop();
        }
    }

    nextTrack(): void {
        this.pauseTrack();
        let nextTrack = Queue.next();
        this.progress?.reset();
        this.resetElapsedTime();
        if (nextTrack) {
            this.loadTrack(nextTrack.getVideoId()!);
            Player._isPlaying = true;
            this.togglePlay();
            Player.player.play();
        }
    }

    previousTrack(): void {
        this.pauseTrack();
        let previousTrack = Queue.previous();
        this.progress?.reset();
        if (previousTrack) {
            this.loadTrack(previousTrack.getVideoId()!);
            Player._isPlaying = true;
            this.togglePlay();
            Player.player.play();
        }
    }

    stopTrack(): void {
        this.pauseTrack();
        this.progress?.reset();
        Player.player.stop();
    }

    togglePlay(): void {
        if (Player._isPlaying) {
            document.getElementById('pause-button')?.classList.remove('hidden');
            document.getElementById('play-button')?.classList.add('hidden');
        }
        else {
            document.getElementById('pause-button')?.classList.add('hidden');
            document.getElementById('play-button')?.classList.remove('hidden');
        }
    }
    
    static seekTo(time: number): void {
        Player.player.seek(time);
    }

    private updateTitle(): void {
        let currentQueue = Queue.getCurrentQueue();
        const song = Song.getSongFromList(currentQueue, Player._currentTrackId);
        const titleDiv = document.getElementById('title');
        if (titleDiv && song) {
            titleDiv.innerHTML = song.getTitle();    
        }
    }

    private updateSongTotalTime(time: number): void {
        const totalTimeEl = document.getElementById('total-time');
        if (totalTimeEl) {
            totalTimeEl.innerHTML = Utils.formatTime(time);
        }
    }

    private static _timer: any;
    private static currentTime = 0;
    private updateElapsedTime(): void {
        if (Player.currentTime < Player.player.getDuration()) {
            Player._timer = setInterval(() => {
                this.update(++Player.currentTime);
            }, 1000);    
        }
    }

    private update(currentTime: number): void {
        const elapsedTimeEl = document.getElementById('elapsed-time');
        if (elapsedTimeEl) {
            elapsedTimeEl.innerHTML = Utils.formatTime(currentTime);
        }
    }

    private stopTimer(): void {
        clearInterval(Player._timer);
    }

    private resetElapsedTime(): void {
        this.stopTimer();
        Player.currentTime = 0;
        this.update(0);
    }

    registerEventHandlers(): void {
        document.getElementById('play-button')?.addEventListener('click', () => {
            console.log('Playing');
            this.playTrack();
        });
        document.getElementById('pause-button')?.addEventListener('click', () => {
            console.log('Paused');
            this.pauseTrack();
        });
        document.getElementById('next-button')?.addEventListener('click', () => {
            console.log('Next track');
            this.nextTrack();
        });
        document.getElementById('previous-button')?.addEventListener('click', () => {
            console.log('Previous track');
            this.previousTrack();
        });

        Player.player.on('playing', () => {
            this.updateTitle();
            if (!this.progress) {
                this.progress = ProgressBar.getInstance('progress-bar');    
            }
            this.progress.setTime(Player.player.getDuration());
            this.updateSongTotalTime(Player.player.getDuration());
            this.updateElapsedTime();
            this.progress.start();
        });

        Player.player.on('ended', () => {
            this.resetElapsedTime();
            this.nextTrack();
        });
    }
}