import React from 'react';
import ChoosingSong from './../../containers/ChoosingSong';
import PropTypes from 'prop-types';
import './SongList.css';


const SongList = (props) => {

    const inputRef = React.createRef();
    const filterList = props.filterList;
    const songs = props.songs.map(song => {
        return (
            <li key={song.id}>
                <ChoosingSong quotesList={song.quotes} youtubeID={song.youtubeId} name={song.title} />
            </li>
        )
    });

    return (
        <div className="list-of-songs">
            <input ref={inputRef} placeholder="search song..." onChange={()=>filterList(inputRef.current.value)}/>
            <ul type="none">{songs}</ul>
        </div>
    )
}

SongList.propTypes = {
    songs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default SongList;