"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = require("./components/player");
const queue_1 = require("./components/queue");
const google_authentication_1 = require("./services/google-authentication");
const search_1 = require("./services/search");
const song_1 = require("./models/song");
const event_1 = require("./services/event");
const playlist_1 = require("./services/playlist");
const utils_1 = require("./services/utils");
const storage_1 = require("./services/storage");
const player = player_1.Player.getInstance('#player');
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
const checkIfAuthenticated = () => {
    var _a, _b, _c, _d, _e;
    if (google_authentication_1.GoogleAuthentication.isAuthenticated()) {
        (_a = signBtnHandle) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
        (_b = searchForm) === null || _b === void 0 ? void 0 : _b.classList.remove('disabled');
        (_c = searchBar) === null || _c === void 0 ? void 0 : _c.setAttribute('placeholder', 'Search songs and artists');
    }
    else {
        (_d = signBtnHandle) === null || _d === void 0 ? void 0 : _d.classList.remove('hidden');
        (_e = searchForm) === null || _e === void 0 ? void 0 : _e.classList.add('disabled');
    }
};
checkIfAuthenticated();
(_a = signBtnHandle) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    google_authentication_1.GoogleAuthentication.authenticate().then(() => {
        checkIfAuthenticated();
    });
});
const onSignIn = (googleUser) => {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
};
const mainContainerBlock = `
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
(_b = searchBtn) === null || _b === void 0 ? void 0 : _b.addEventListener('click', (event) => {
    var _a;
    event.preventDefault();
    const searchTerm = (_a = searchBar) === null || _a === void 0 ? void 0 : _a.value;
    if (searchTerm) {
        search_1.Search.search(searchTerm).then((response) => {
            var _a;
            const searchResultDiv = document.getElementById('search-results');
            if (searchResultDiv) {
                searchResultDiv.innerHTML = '';
                let song;
                for (song of response) {
                    let filledTemplate = mainContainerBlock;
                    filledTemplate = filledTemplate.replace('{{thumbnail}}', song.getThumbnail());
                    filledTemplate = filledTemplate.replace('{{title}}', song.getTitle());
                    filledTemplate = filledTemplate.replace(/{{id}}/g, song.getId());
                    searchResultDiv.innerHTML = ((_a = searchResultDiv) === null || _a === void 0 ? void 0 : _a.innerHTML) + filledTemplate;
                }
                Array.from(document.getElementsByClassName('playLink')).forEach(element => {
                    element.addEventListener('click', (event) => {
                        event.preventDefault();
                        const id = element.getAttribute('data-attribute');
                        const song = song_1.Song.getSongFromList(response, id);
                        if (song) {
                            const action = element.getAttribute('data-attribute-action');
                            playlist_1.Playlist.getSong(song.getId())
                                .then(savedSong => {
                                if (savedSong && savedSong.length > 0) {
                                    song.setVideoId(savedSong[0].videoId);
                                    if (action === 'play') {
                                        player.queueAndPlay(song);
                                    }
                                    else {
                                        queue_1.Queue.queue(song);
                                    }
                                }
                                else {
                                    // fetch videoId and save song
                                    search_1.Search.youTubeSearch(song.getTitle() + ' ' + song.getArtistName())
                                        .then(videoId => {
                                        const action = element.getAttribute('data-attribute-action');
                                        if (videoId) {
                                            song.setVideoId(videoId);
                                            if (action === 'play') {
                                                player.queueAndPlay(song);
                                            }
                                            else {
                                                queue_1.Queue.queue(song);
                                            }
                                            playlist_1.Playlist.saveSong(song)
                                                .then(() => console.log('Song saved'))
                                                .catch(err => console.log(err));
                                            console.log(queue_1.Queue.getCurrentQueue());
                                        }
                                        else {
                                            console.log('Invalid song ID : ', id);
                                        }
                                    });
                                }
                            });
                        }
                    });
                });
            }
        });
    }
});
const updateQueueListener = () => {
    var _a;
    console.log('Queue updated');
    const currentQueue = queue_1.Queue.getCurrentQueue();
    const playlist = document.getElementById('playlist');
    if (playlist) {
        let song;
        playlist.innerHTML = '';
        for (song of currentQueue) {
            let filledTemplate = navBlock;
            filledTemplate = filledTemplate.replace('{{thumbnail}}', song.getThumbnail());
            filledTemplate = filledTemplate.replace('{{title}}', song.getTitle());
            filledTemplate = filledTemplate.replace(/{{id}}/g, song.getVideoId());
            playlist.innerHTML = ((_a = playlist) === null || _a === void 0 ? void 0 : _a.innerHTML) + filledTemplate;
        }
        Array.from(document.getElementsByClassName('playlist-play-btn')).forEach(element => {
            element.addEventListener('click', (event) => {
                var _a;
                event.preventDefault();
                const id = element.getAttribute('data-attribute');
                if (id) {
                    player.playTrack(id);
                    element.classList.add('hidden');
                    (_a = element.nextElementSibling) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
                }
            });
        });
        Array.from(document.getElementsByClassName('playlist-pause-btn')).forEach(element => {
            element.addEventListener('click', (event) => {
                var _a;
                event.preventDefault();
                player.pauseTrack();
                element.classList.add('hidden');
                (_a = element.previousElementSibling) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
            });
        });
        Array.from(document.getElementsByClassName('delete-track')).forEach(element => {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                const id = element.getAttribute('data-attribute');
                if (id) {
                    queue_1.Queue.deleteTrack(id);
                }
            });
        });
    }
};
(_c = document.getElementById('save-playlist')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', (event) => {
    event.preventDefault();
    if (!storage_1.Storage.get('CURRENT_PLAYLIST_ID')) {
        playlist_1.Playlist.savePlaylist(utils_1.Utils.randomNumber(), queue_1.Queue.getCurrentSongIds())
            .then(response => {
            console.log(response);
            if (response && response.id) {
                storage_1.Storage.save('CURRENT_PLAYLIST_ID', response.id);
            }
        })
            .catch(err => console.log(err));
    }
    else {
    }
});
event_1.AppEvent.listen('queue-updated', updateQueueListener);
queue_1.Queue.initalize();
//# sourceMappingURL=app.js.map