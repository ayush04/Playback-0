export class GoogleAuthentication {
    private static _isAuthenticated: boolean = window.sessionStorage.getItem('google-authenticated') === 'true'? true: false;

    static isAuthenticated(): boolean {
        return GoogleAuthentication._isAuthenticated;
    }

    static authenticate(): Promise<any> {
        return new Promise((resolve, reject) => {
            gapi.load('auth2', () => {
                // @ts-ignore
                gapi.auth2.init({
                    client_id: '<client_id>'
                });
                
                // @ts-ignore
                return gapi.auth2.getAuthInstance().signIn({
                    scope: 'https://www.googleapis.com/auth/youtube.force-ssl'
                }).then(() => {
                    GoogleAuthentication._isAuthenticated = true;
                    window.sessionStorage.setItem('google-authenticated', 'true');
                    console.log('Authenticated');
                    return resolve(GoogleAuthentication.loadClient());
                }).catch((err: Error) => {
                    console.log(err);
                    return reject(true);
                });
            });
        });
    }

    static loadClient() {
        return new Promise((resolve, reject) => {
            gapi.load('client', () => {
                gapi.client.setApiKey('<api_key>');
                return resolve(gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest", "v3"));
            });
        });
    }
}