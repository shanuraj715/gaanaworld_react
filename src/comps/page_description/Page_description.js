import React, { Component } from 'react';
import './style.css';
import Title from '../main_title/title';
import { SITE_TITLE } from '../../config';

class Description extends Component {
    render() {
        return(
            <div className="page_description_container">
                <Title text="Page Description" />
                <div className="page_description_block">
                    <p className="page_description">Download all songs of { this.props.category} from { SITE_TITLE }. All songs are available in high quality. { this.props.category} all songs download. { this.props.category} all songs download from { SITE_TITLE }. All { this.props.category} songs download from { SITE_TITLE }. Download all mp3 songs in 128kbps, 192kbps and 320kbps - in HD High Quality Audio only on { SITE_TITLE }, You can also play the songs online before download.</p>
                </div>
            </div>
        )
    }
}

export default Description;