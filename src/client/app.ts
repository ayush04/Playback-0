import { Player } from './components/player';
import { Queue } from './components/queue';
import { GoogleAuthentication } from './services/google-authentication';
import { Search } from './services/search';
import { Song } from './models/song';
import { AppEvent } from './services/event';
import { Playlist } from './services/playlist';
import { Utils } from './services/utils';
import { Storage } from './services/storage';

const player = Player.getInstance('#player');

//Queue.queue('DyDfgMOUjCI');
/* Queue.queue('kJQP7kiw5Fk');
Queue.queue('sWLQVA9Nl5s');
Queue.queue('EbIlgD5InSg');
Queue.queue('tiyLvo24A2g');
Queue.queue('_1uGNaE6qvU'); */

player.registerEventHandlers();

const signBtnHandle = document.getElementById('signin-btn'); 
const searchForm = document.getElementById('search-form');
const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-button');

const checkIfAuthenticated = (): void => {
    if (GoogleAuthentication.isAuthenticated()) {
        signBtnHandle?.classList.add('hidden');
        searchForm?.classList.remove('disabled');
        searchBar?.setAttribute('placeholder', 'Search songs and artists');
    }
    else {
        signBtnHandle?.classList.remove('hidden');
        searchForm?.classList.add('disabled');
    }
}
checkIfAuthenticated();
signBtnHandle?.addEventListener('click', () => {
    GoogleAuthentication.authenticate().then(() => {
        checkIfAuthenticated();
    });
});

const onSignIn = (googleUser: any) => {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

const mainContainerBlock: string = `
<div class="col-xs-4 col-sm-3 col-md-3 col-lg-2">
    <div class="item">
        <div class="pos-rlt">
            <div class="item-overlay bg-black-opacity">
                <div class="center text-center w-full m-t-n">
                    <a href class="playLink" data-attribute="{{id}}" data-attribute-action="play">
                        <i class="fa fa-2x fa-play-circle text-white m-r-sm"></i>
                    </a>
                    <a href class="playLink" data-attribute="{{id}}" data-attribute-action="queue">
                        <i class="fa fa-2x fa-arrow-alt-circle-down text-white"></i>
                    </a>
                </div>
            </div>
            <div class="r-2x">
                <a>
                    <img class="img-fluid" src="{{thumbnail}}"/>
                </a>
            </div>
        </div>
        <div class="p-2 text-center text-muted text-ellipsis">
            {{title}}
        </div>
    </div>
</div>
`;

/*const navBlock = `
<li class="list-group-item no-border no-padder padder-h-sm queue-list" data-attribute={{id}}>
    <span class="float-left thumb-sm m-r m-t-xs">
        <img src="{{thumbnail}}" alt="..." class="r">
    </span>
    <div class="clear">
        <div><small>{{title}}</small></div>
    </div>
</li>
`;*/

const navBlock = `
<li class="list-group-item no-border no-padder padder-h-sm">
    <div class="float-right m-l padder-h-sm">
        <a class="delete-track" data-attribute={{id}}><i class="fa fa-times-circle"></i></a>
    </div>
    <span class="m-r-sm float-left padder-h-sm">
        <button class="playlist-play-btn player-attribute bg-light no-padder" data-attribute={{id}}><i class="fas fa-play"></i></button>
        <button class="playlist-pause-btn player-attribute bg-light no-padder hidden"><i class="fas fa-pause"></i></button>
    </span>
    <div class="clear">
        <span class="float-left thumb-sm m-r m-t-xs">
            <img src="{{thumbnail}}" alt="..." class="r">
        </span>
        <span class="title text-ellipsis">{{title}}</span>
    </div>
</li> 
`;
searchBtn?.addEventListener('click', (event) => {
    event.preventDefault();
    const searchTerm = (<HTMLInputElement>searchBar)?.value;
    if (searchTerm) {
        Search.search(searchTerm).then((response: Array<Song>) => {
            const searchResultDiv = document.getElementById('search-results');
            if (searchResultDiv) {
                searchResultDiv.innerHTML = '';
                let song: Song;
                for (song of response) {
                    let filledTemplate = mainContainerBlock;
                    filledTemplate = filledTemplate.replace('{{thumbnail}}', song.getThumbnail());
                    filledTemplate = filledTemplate.replace('{{title}}', song.getTitle());
                    filledTemplate = filledTemplate.replace(/{{id}}/g, song.getId());
                    searchResultDiv.innerHTML = searchResultDiv?.innerHTML + filledTemplate;
                }

                Array.from(document.getElementsByClassName('playLink')).forEach(element => {
                    element.addEventListener('click', (event) => {
                        event.preventDefault();
                        const id = element.getAttribute('data-attribute');
                        const song = Song.getSongFromList(response, id);
                        if (song) {
                            const action = element.getAttribute('data-attribute-action');
                            Playlist.getSong(song.getId())
                            .then(savedSong => {
                                if (savedSong && savedSong.length > 0) {
                                    song.setVideoId(savedSong[0].videoId);
                                    if (action === 'play') {
                                        player.queueAndPlay(song);
                                    }
                                    else {
                                        Queue.queue(song);
                                    }
                                }
                                else {
                                    // fetch videoId and save song
                                    Search.youTubeSearch(song.getTitle() + ' ' + song.getArtistName())
                                    .then(videoId => {
                                        const action = element.getAttribute('data-attribute-action');
                                        if (videoId) {
                                            song.setVideoId(videoId);
                                            if (action === 'play') {
                                                player.queueAndPlay(song);
                                            }
                                            else {
                                                Queue.queue(song);
                                            }
                                            Playlist.saveSong(song)
                                                .then(() => console.log('Song saved'))
                                                .catch(err => console.log(err));
                                            console.log(Queue.getCurrentQueue());
                                        }
                                        else {
                                            console.log('Invalid song ID : ', id);
                                        }
                                    }); 
                                }
                            })   
                        }
                    });
                });
            }
        });
    }
});

const updateQueueListener = () => {
    console.log('Queue updated');
    const currentQueue: Array<Song> = Queue.getCurrentQueue();
    const playlist = document.getElementById('playlist');
    if (playlist) {
        let song: Song;
        playlist.innerHTML = '';
        for (song of currentQueue) {
            let filledTemplate = navBlock;
            filledTemplate = filledTemplate.replace('{{thumbnail}}', song.getThumbnail());
            filledTemplate = filledTemplate.replace('{{title}}', song.getTitle());
            filledTemplate = filledTemplate.replace(/{{id}}/g, song.getVideoId()!);
            playlist.innerHTML = playlist?.innerHTML + filledTemplate;
        }

        Array.from(document.getElementsByClassName('playlist-play-btn')).forEach(element => {
            element.addEventListener('click', (event) => { 
                event.preventDefault();
                const id = element.getAttribute('data-attribute');
                if (id) {
                    player.playTrack(id);
                    element.classList.add('hidden');
                    element.nextElementSibling?.classList.remove('hidden');
                }
            });
        });

        Array.from(document.getElementsByClassName('playlist-pause-btn')).forEach(element => {
            element.addEventListener('click', (event) => { 
                event.preventDefault();
                player.pauseTrack();
                element.classList.add('hidden');
                element.previousElementSibling?.classList.remove('hidden');
            });
        });

        Array.from(document.getElementsByClassName('delete-track')).forEach(element => {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                const id = element.getAttribute('data-attribute');
                if (id) {
                    Queue.deleteTrack(id);
                }
            });
        });
    }
}

document.getElementById('save-playlist')?.addEventListener('click', (event) => {
    event.preventDefault();
    if (!Storage.get('CURRENT_PLAYLIST_ID')) {
        Playlist.savePlaylist(Utils.randomNumber(), Queue.getCurrentSongIds())
        .then(response => {
            console.log(response)
            if (response && response.id) {
                Storage.save('CURRENT_PLAYLIST_ID', response.id);
            }
        })
        .catch(err => console.log(err));    
    }
    else {
    }
});
AppEvent.listen('queue-updated', updateQueueListener);
Queue.initalize();