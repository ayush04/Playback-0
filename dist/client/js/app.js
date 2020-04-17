"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import YouTubePlayer from 'yt-player';
require("yt-player");
//const YouTubePlayer = require('yt-player');
var player = new YouTubePlayer('#player');
player.load('GKSRyLdjsPA');
player.on('playing', function () {
    console.log(player.getDuration());
});
//# sourceMappingURL=app.js.map