import { GoogleAuthentication } from './google-authentication';
import { Song } from '../models/song';

export class Search {
    private static MAX_RESULTS = 12;

    static search(q: string, part?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            gapi.load('client', () => {
                //@ts-ignore
                if (!gapi.client.youtube) {
                    GoogleAuthentication.loadClient().then(() => {
                        return Search._search(q, part)
                            .then((response: Array<Song>) => resolve(Search._processResponse(response)))
                            .catch((err: Error) => {
                                console.log(err);
                                reject(err);
                            });
                    });                    
                }
                else {
                    return Search._search(q, part)
                        .then((response: Array<Song>) => resolve(Search._processResponse(response)))
                        .catch((err: Error) => {
                            console.log(err);
                            reject(err);
                        });
                }
            });
        });
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

    
    private static _processResponse(response: any): Object {
        let processedResponse = new Array<Song>();

        if (!response || response.status !== 200) {
            return {};
        }
        if (response.result.items && response.result.items.length > 0) {
            for (let item of response.result.items) {
                if (item.snippet.channelTitle.toLowerCase().indexOf('vevo') > -1 || item.snippet.channelTitle.toLowerCase().indexOf('official') > -1
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
        }
        return processedResponse;
    }
}