import React, { Component } from 'react';
import './title.css';

class MainTitle extends Component {
    render() {
        return(
            <div className="main_title_cont">
                <p className="main_title">{ this.props.text }</p>
            </div>
        )
    }
}

export default MainTitle;