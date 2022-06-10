export const initialState = {
    user : null,
    playlists : [],
    isPlaying : false,
    item : null,
    albums: [],
    audioSrc: null,
    tracks: [],

    // token: "BQArQivys2iUrLZTVpYiu26skstyeRp4u_39HIS-undBE2WFV1t6H3dI7ZiaujToabqgx8KZFIaRVUGA6OraWFAXYGZWeJqgy2RTFeM-exsSUVhdGBBk_4j85LumCS_vjwqxIkGxZ-je8cH3w9MzuWYSNa5nDR04WptFmM_PBaRbWZQkwcD0",
    token: null,
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER' :
            return {
                ...state,
                user : action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token : action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists : action.playlists
            }
        case 'SET_ALBUMS' :
            return {
                ...state,
                albums : action.albums
            }
        case 'SET_PLAY_STATUS' :
            return {
                ...state,
                isPlaying : action.isPlaying
            } 
            
        case 'SET_AUDIO_SRC' :
            return {
                ...state,
                audioSrc : action.audioSrc
            }
        case 'SET_TRACK_DETAILS' :
            return {
                ...state,
                tracks : action.tracks
            }

        default:
            return state;
    }
}

export default reducer;