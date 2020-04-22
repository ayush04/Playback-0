import { GoogleAuthentication } from './google-authentication';

interface SearchResponse {
    id: string,
    title: string,
    description: string,
    thumbnail: string
}

export class Search {
    private static MAX_RESULTS = 10;
    static search(q: string, part?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            gapi.load('client', () => {
                //@ts-ignore
                if (!gapi.client.youtube) {
                    GoogleAuthentication.loadClient().then(() => {
                        return Search._search(q, part)
                            .then((response: any) => resolve(Search._processResponse(response)))
                            .catch((err: Error) => {
                                console.log(err);
                                reject(err);
                            });
                    });                    
                }
                else {
                    return Search._search(q, part)
                        .then((response: any) => resolve(Search._processResponse(response)))
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
            maxResults: Search.MAX_RESULTS
        })
    }

    
    private static _processResponse(response: any): Object {
        let processedResponse = new Array<SearchResponse>();

        if (!response || response.status !== 200) {
            return {};
        }
        if (response.result.items && response.result.items.length > 0) {
            for (let item of response.result.items) {
                const resObj: SearchResponse = {
                    id: '',
                    title: '',
                    description: '',
                    thumbnail: ''
                };

                resObj.id = item.id.videoId;
                resObj.title = item.snippet.title;
                resObj.description = item.snippet.description;
                if (item.snippet.thumbnails.high) {
                    resObj.thumbnail = item.snippet.thumbnails.high.url; 
                }
                else if (item.snippet.thumbnails.medium) {
                    resObj.thumbnail = item.snippet.thumbnails.medium.url; 
                }
                else {
                    resObj.thumbnail = item.snippet.thumbnails.default.url; 
                }
                processedResponse.push(resObj);
            }
        }
        return processedResponse;
    }
}