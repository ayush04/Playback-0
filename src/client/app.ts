import { Player } from './components/player';

const player = Player.getInstance('#player');

player.loadTrack('kJQP7kiw5Fk');

document.getElementById('play-button')?.addEventListener('click', () => {
    console.log('Playing');
    player.playTrack();
    document.getElementById('pause-button')?.classList.remove('hidden');
    document.getElementById('play-button')?.classList.add('hidden');
    
});
document.getElementById('pause-button')?.addEventListener('click', () => {
    player.pauseTrack();
    document.getElementById('pause-button')?.classList.add('hidden');
    document.getElementById('play-button')?.classList.remove('hidden');
});