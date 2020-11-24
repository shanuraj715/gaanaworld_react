import React, { Component } from 'react';
import Loading from './LoadingSongs.svg';

export default class Loader extends Component {

    
    render() {
        const style = {
            textAlign: "center",
        };

        return (
            <div style={ style }>
                <img src={ Loading } alt="Page Loading Amination" />
            </div>
        )
    }
}
