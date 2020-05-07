import YouTubePlayer from 'yt-player';

import { Queue } from './queue';
import { Song } from '../models/song';
import { ProgressBar } from './progess-bar';

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
                this.loadTrack(track.getId());
                Player._isPlaying = true;
                this.togglePlay();
                Player.player.play();
                /*if (this.progress) {
                    this.progress.start();
                }*/
            }
            else {
                console.log('No tracks to play');
            }
        }
        else {
            Player._isPlaying = true;
            this.togglePlay();
            Player.player.play();
            /*if (this.progress) {
                this.progress.start();
            }*/
        }
    }

    queueAndPlay(song: Song): void {
        Queue.queue(song);
        if (Player._isPlaying) {
            this.pauseTrack();
        }
        this.loadTrack(song.getId());
        Queue.updateCurrentPlayingTrack(song.getId());
        Player._isPlaying = true;
        this.togglePlay();
        Player.player.play();
        /*if (this.progress) {
            this.progress.start();
        }*/
    }

    pauseTrack(): void {
        Player._isPlaying = false;
        Player.player.pause();
        this.togglePlay();
        if (this.progress) {
            this.progress.stop();
        }
    }

    nextTrack(): void {
        this.pauseTrack();
        let nextTrack = Queue.next();
        this.progress?.reset();
        if (nextTrack) {
            this.loadTrack(nextTrack.getId());
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
            this.loadTrack(previousTrack.getId());
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

    private updateTitle() {
        let currentQueue = Queue.getCurrentQueue();
        const song = Song.getSongFromList(currentQueue, Player._currentTrackId);
        const titleDiv = document.getElementById('title');
        if (titleDiv && song) {
            titleDiv.innerHTML = song.getTitle();    
        }
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
            this.progress.start();
        });

        Player.player.on('ended', () => {
            this.nextTrack();
        });
    }
}

/* export class Player {
    private static player: YT.Player;

    constructor(domElId: string, configObj: any) {
        
    }

    static getInstance(domElId: string): YT.Player {
        if (!Player.player) {
            const configObj = {
                height: '390',
                width: '640',
                events: {
                    //onReady: Player.onReady,
                    //onStateChange: Player.onStateChange
                }
            };
            Player.player = new YT.Player(domElId, configObj);
        }
        return Player.player;
    }

    loadTrack(videoId: string): void {
        Player.player.loadVideoById(videoId);
    }

    playTrack(): void {
        Player.player.playVideo();
    }

    pauseTrack(): void {
        Player.player.pauseVideo();
    }
    
} */

/* import YouTubePlayer from "yt-player";

export class Player {
    private static player: YouTubePlayer;

    static getInstance(domElId: string) : YouTubePlayer {
        if (!Player.player) {
            Player.player = new YouTubePlayer(domElId);
        }
        return Player.player;
    }
} */
