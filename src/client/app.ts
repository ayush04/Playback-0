import { Player } from './components/player';
import { Queue } from './components/queue';
import { GoogleAuthentication } from './services/google-authentication';
import { Search } from './services/search';
import { Song } from './components/song';

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

const template: string = `
<div class="col-xs-6 col-sm-4 col-md-4 col-lg-3">
    <div class="item">
        <div class="r-2x">
            <a>
                <img class="img-fluid" src="{{thumbnail}}"/>
            </a>
        </div>
        <div class="p-2 text-center text-muted">
            {{title}}
            <button class="btn btn-sm btn-link queueBtn" data-attribute="{{id}}">Q it!</button>
        </div>
    </div>
</div>
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
                    let filledTemplate = template;
                    filledTemplate = filledTemplate.replace('{{thumbnail}}', song.getThumbnail());
                    filledTemplate = filledTemplate.replace('{{title}}', song.getTitle());
                    filledTemplate = filledTemplate.replace('{{id}}', song.getId());
                    searchResultDiv.innerHTML = searchResultDiv?.innerHTML + filledTemplate;
                }

                Array.from(document.getElementsByClassName('queueBtn')).forEach(element => {
                    element.addEventListener('click', () => {
                        const id = element.getAttribute('data-attribute');
                        if (id) {
                            const songToQueue = Song.getSongFromList(response, id);
                            if (songToQueue) {
                                Queue.queue(songToQueue);
                                console.log(Queue.getCurrentQueue());
                            }
                            else {
                                console.log('Invalid song ID : ', id);
                            }
                        }
                    });
                });
            }
        });
    }
});
