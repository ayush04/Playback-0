import { GoogleAuthentication } from './google-authentication';

export class Search {
    static search(q: string, part?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            gapi.load('client', () => {
                //@ts-ignore
                if (!gapi.client.youtube) {
                    GoogleAuthentication.loadClient().then(() => {
                        return Search._search(q, part)
                            .then((response: any) => resolve(response))
                            .catch((err: Error) => {
                                console.log(err);
                                reject(err);
                            });
                    });                    
                }
                else {
                    return Search._search(q, part)
                        .then((response: any) => resolve(response))
                        .catch((err: Error) => {
                            console.log(err);
                            reject(err);
                        });
                }
            });
        });
    }

    private static _search(q: string, part?: string) {
        // @ts-ignore
        return gapi.client.youtube.search.list({
            part: part ? part : 'snippet',
            q: q
        })
    }
}