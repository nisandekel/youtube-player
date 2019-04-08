import Song from './../components/Song/Song';
import { connect } from 'react-redux';
import {songChanged} from './../components/SongPlaying/SongPlaying.actions';


// const mapStateToProps = state => {
//     const { songList, songPlaying } = state;
//     return { songList, songPlaying };
// }

const mapDispatchToProps = dispatch => {
    return {
        songChanged: (song) => dispatch(songChanged(song))
    }
}

export default connect(null, mapDispatchToProps)(Song);


