import React, { Component } from 'react';
import './song.css';

import SongArea1 from '../song_data/Song_data';
import Player from '../player/Player';

class Song extends Component {
    render(){
        return(
            <div className="song">

                <SongArea1 data={ this.props.data } />
                <Player data={ this.props.data }/>
                
            </div>
        )
    }
}

export default Song;