import SECRET from '../secret/secret';

export const getAPIKey = () => {
    return SECRET.API_KEY;
};

export const getClientId = () => {
    return SECRET.CLIENT_ID;
}