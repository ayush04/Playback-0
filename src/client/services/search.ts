import { GoogleAuthentication } from './google-authentication';
import { Song } from '../models/song';

export class Search {
    private static MAX_RESULTS = 1;

    static youTubeSearch(q: string, part?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            gapi.load('client', () => {
                //@ts-ignore
                if (!gapi.client.youtube) {
                    GoogleAuthentication.loadClient().then(() => {
                        return Search._search(q, part)
                            .then((response: Array<Song>) => resolve(Search._processYoutubeResponse(response)))
                            .catch((err: Error) => {
                                console.log(err);
                                reject(err);
                            });
                    });                    
                }
                else {
                    return Search._search(q, part)
                        .then((response: Array<Song>) => resolve(Search._processYoutubeResponse(response)))
                        .catch((err: Error) => {
                            console.log(err);
                            reject(err);
                        });
                }
            });
        });
    }

    static search(q: string): Promise<any> {
        return fetch('http://playback.io:3000/search/' + encodeURIComponent(q))
            .then(response => response.json())
            .then(responseJson => Search._processResponse(responseJson))
            .catch(error => console.log(error));
    }

    private static _search(q: string, part?: string): Promise<any> {
        // @ts-ignore
        return gapi.client.youtube.search.list({
            part: part ? part : 'snippet',
            q: q,
            type: 'video',
            maxResults: Search.MAX_RESULTS
        })
    }

    private static _processYoutubeResponse(response: any): String {
        let songId = '';
        if (response && response.result && response.result.items) {
            songId = response.result.items[0].id.videoId;
        }
        return songId;
    }
    
    private static _processResponse(response: any): Object {
        let processedResponse = new Array<Song>();

        if (!response || !response.results) {
            return {};
        }
        for (let item of response.results) {
            let thumbnail = item.artworkUrl100 ? item.artworkUrl100 :
                (item.artworkUrl60 ? item.artworkUrl60 : (item.artworkUrl30 ? item.artworkUrl30 : ''));
            
            const resObj = new Song(item.trackId, item.trackName, item.collectionName, item.artistName,
                thumbnail);
            
            processedResponse.push(resObj);
        }
        /* if (!response || response.status !== 200) {
            return {};
        }
        if (response.result.items && response.result.items.length > 0) {
            for (let item of response.result.items) {
                if (true || item.snippet.channelTitle.toLowerCase().indexOf('vevo') > -1 || item.snippet.channelTitle.toLowerCase().indexOf('official') > -1
                    || item.snippet.title.toLowerCase().indexOf('official') > -1) {
                    let thumbnail = '';
                    if (item.snippet.thumbnails.high) {
                        thumbnail = item.snippet.thumbnails.high.url; 
                    }
                    else if (item.snippet.thumbnails.medium) {
                        thumbnail = item.snippet.thumbnails.medium.url; 
                    }
                    else {
                        thumbnail = item.snippet.thumbnails.default.url; 
                    }

                    const resObj = new Song(item.id.videoId, item.snippet.title, item.snippet.description,
                        thumbnail);
                    processedResponse.push(resObj);
                }
            } 
        }*/
        return processedResponse;
    }
}