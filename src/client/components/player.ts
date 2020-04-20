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


const YTPlayer = require('yt-player')

export class Player extends YTPlayer {
    private static player: Player;

    private constructor(domElID: string) {
        super(domElID);
    }

    static getInstance(domElID: string): Player {
        if (!Player.player) {
            Player.player = new Player(domElID);
        }
        return Player.player;
    };

    loadTrack(trackId: string) {
        Player.player.load(trackId);
    }

    playTrack() {
        Player.player.play();
    }

    pauseTrack() {
        Player.player.pause();
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