import { SONG_CHANGED, PLAY_QUOTE } from './SongPlaying.actions';

function SongPlayingReducer(state = { youtubeID: undefined, name: "", listOfQuotes: [], offset: 0 }, action) {
    switch (action.type) {
        case SONG_CHANGED:
            return { youtubeID: action.song.youtubeId, name: action.song.title, listOfQuotes: action.song.quotes, offset: 0 };
        case PLAY_QUOTE:
            const newState = {...state};
            newState.offset=action.quote.offset;
            return newState;
        default:
            return state;
    }
}

export default SongPlayingReducer;