import React, { Component } from 'react';
import './share.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebookF } from '@fortawesome/free-brands-svg-icons';

class Share extends Component {
    render() {
        return(
            <div className="share">
                <a href="whatsapp://send?text=Click%20on%20link%20to%20download%0A%0Ahttps://gaanaworld.in/song/602361/photo_-main-teri-rani-ep6--shipra-goyal,-kara" className="share_btn" rel="nofollow">
                    <FontAwesomeIcon icon={ faWhatsapp } />
                </a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gaanaworld.in/song/602361/photo_-main-teri-rani-ep6--shipra-goyal,-kara" className="share_btn" rel="nofollow">
                    <FontAwesomeIcon icon={ faFacebookF } />
                </a>
            </div>
        )
    }
}

export default Share;