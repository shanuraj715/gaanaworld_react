import React, { Component } from 'react';
import './footer.css';
import { SITE_TITLE } from '../../config';

class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <p className="footer_text">Copyright © { new Date().getFullYear() } | { SITE_TITLE }</p>
            </div>
        )
    }
}

export default Footer;