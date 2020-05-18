import { Player } from './components/player';
import { Queue } from './components/queue';
import { GoogleAuthentication } from './services/google-authentication';
import { Search } from './services/search';
import { Song } from './models/song';
import { AppEvent } from './services/event';

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

const mainContainerBlock: string = `
<div class="col-xs-6 col-sm-4 col-md-4 col-lg-3">
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
        <div class="p-2 text-center text-muted">
            {{title}}
        </div>
    </div>
</div>
`;

const navBlock = `
<li class="list-group-item no-border no-padder padder-h-sm queue-list" data-attribute={{id}}>
    <span class="float-left thumb-sm m-r m-t-xs">
        <img src="{{thumbnail}}" alt="..." class="r">
    </span>
    <div class="clear">
        <div><small>{{title}}</small></div>
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
                                    console.log(Queue.getCurrentQueue());
                                }
                                else {
                                    console.log('Invalid song ID : ', id);
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

        Array.from(document.getElementsByClassName('queue-list')).forEach(element => {
            element.addEventListener('click', (event) => { 
                event.preventDefault();
                const id = element.getAttribute('data-attribute');
                if (id) {
                    player.playTrack(id);
                }
            });
        });
    }
}
AppEvent.listen('queue-updated', updateQueueListener);
Queue.initalize();