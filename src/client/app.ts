const ytPlayer = require('yt-player');

const player = new ytPlayer('#player');

player.load('tw9mYaLnnug');
player.on('playing', () => {
    console.log(player.getDuration());
});