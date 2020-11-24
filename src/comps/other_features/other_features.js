import React, { Component } from 'react';
import Title from '../main_title/title';
import { SITE_TITLE, SITE_URL } from '../../config.js';
import './other_features.css';
import { Link } from 'react-router-dom';

class OtherFeatures extends Component {
    render() {
        return(
            <div className="other_features">
                <Title text={ SITE_TITLE } />

                <div className="other_features_block">
                    <Link className="other-features-link" to={ SITE_URL + 'contact-us' }>Contact Us</Link>
                </div>

                <div className="other_features_block">
                    <Link className="other-features-link" to={ SITE_URL + 'create-account' }>Create Account</Link>
                </div>

                <div className="other_features_block">
                    <Link className="other-features-link" to={ SITE_URL + 'about-us' }>About Us</Link>
                </div>

                <div className="other_features_block">
                    <Link className="other-features-link" to={ SITE_URL + 'privacy-policy' }>Privacy Policy</Link>
                </div>

                <div className="other_features_block">
                    <Link className="other-features-link" to={ SITE_URL + 'copyright-policy' }>Copyright Policy</Link>
                </div>

            </div>
        )
    }
}

export default OtherFeatures;