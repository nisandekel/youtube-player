import { SONGS_FETCHED, FILTER_LIST } from "./SongList.actions";

let completeList = [];

function SongListReducer(state = [], action) {
    switch (action.type) {
        case SONGS_FETCHED:
            completeList = [...action.allSongs];
            return action.allSongs;
        case FILTER_LIST:
            const filteredList = completeList.filter(song=>{
                return song.title.toLowerCase().includes(action.inputVal.toLowerCase());
            })
            return filteredList;
        default:
            return state;
    }
}

export default SongListReducer;
