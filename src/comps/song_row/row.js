import React, { Component } from 'react';
import './row.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMusic } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


class SongRow extends Component {
    render() {
         return(
            <div className="new_upload_block">
                <div className="new_upload_image_block">
                    <span className="new_upload_song_music_icon">
                        <FontAwesomeIcon icon={ faMusic } />
                    </span>
                </div>
                
                <div className="new_upload_song_meta">
                    <p className="new_upload_song_title">
                        <Link className="new_upload_link" to={ this.props.url }>{ this.props.title }</Link>
                    </p>
                    <span className="new_uploads_category">{ this.props.first }</span>
                    <span className="new_uploads_singer">{ this.props.second }</span>
                    <span className="new_uploads_size">{ this.props.third }</span>
                </div>
            </div>
         )
    }
}

export default SongRow;