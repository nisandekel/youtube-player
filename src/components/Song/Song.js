import React from 'react';
import PropTypes from 'prop-types';
import './Song.css';


const Song = (props) => {

    const changeSong = props.songChanged;

    return (
        <div className="song" onClick={()=>changeSong({youtubeId:props.youtubeID,title:props.name, quotes:props.quotesList})}>{props.name}</div>
    );
}

Song.propTypes = {
    name:PropTypes.string.isRequired
}

export default Song;