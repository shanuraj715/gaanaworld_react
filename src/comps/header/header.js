import React, { Component } from 'react';
import {SITE_URL} from '../../config';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component{
    render() {
        return(
            <div className="header">
                {/* <p className="header_text"> */}
                    {/* <a className="header_link" href=""></a> */}
                {/* </p> */}
                <Link to={ SITE_URL } className="header_link">
                    <img src="https://gaanaworld.in/images/site_title_image.png" className="header_site_title_img" alt="GaanaWorld.in logo" />
                </Link>
                <p className="header_desc">India's No. 1 Music Site</p>
            </div>
        )
    }
}

export default Header;