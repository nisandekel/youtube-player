import React, { Component } from 'react';
import VisabillityList from './containers/VisabillityList';
import { connect } from 'react-redux';
import { getSongsFromServer } from './components/SongList/SongList.actions';
import YouTube from 'react-youtube';
import SongPlaying from './components/SongPlaying/SongPlaying.view';
import ListOfQuotes from './components/ListOfQuotes/ListOfQuotes';
import { playQuote } from './components/SongPlaying/SongPlaying.actions';
import Header from './components/Header/Header.view';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getSongsFromServer();
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {

    const { songList, songPlaying, playQuote } = this.props;

    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        start: songPlaying.offset
      }
    };

    return (
      <div className="App">
        <Header title={this.props.name}/>
        <div className="container">
          <VisabillityList songs={songList} />
          <div className="youtube-content">
            <SongPlaying name={songPlaying.name}></SongPlaying>
            <YouTube className="youtube-player" videoId={songPlaying.youtubeID} opts={opts} onReady={this._onReady} />
            <ListOfQuotes playQuote={playQuote} quotes={songPlaying.listOfQuotes} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { songList, songPlaying } = state;
  return { songList, songPlaying };
}

const mapDispatchToProps = dispatch => {
  return {
    getSongsFromServer: () => dispatch(getSongsFromServer()),
    playQuote: (quote) => dispatch(playQuote(quote))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

