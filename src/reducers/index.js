import { combineReducers } from 'redux'
import SongListReducer from '../components/SongList/SongList.reducer';
import SongPlayingReducer from './../components/SongPlaying/SongPlaying.reducer';

export default combineReducers({
    songList:SongListReducer,
    songPlaying: SongPlayingReducer
});