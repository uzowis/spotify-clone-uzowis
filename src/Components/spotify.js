const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = 'e302441f3995440bb31b0ea29e08c27f';
const redirectUrl = 'https://spotifyclone-uzowis.web.app/';

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const getTokenFromURL = () =>{
     return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) =>{
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial

    }, {});
}
const loginUrl = `${authEndpoint}/?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

export default loginUrl;