import React, { Component } from 'react';
import Loading from './Ripple.svg';

export default class Loader extends Component {

    
    render() {
        const style = {
            textAlign: "center",
            minWidth: '400px'
        };

        const img_style = {
            width: '70vw',
            maxWidth: '250px'
        }

        return (
            <div style={ style }>
                <img src={ Loading } style={ img_style } alt="Page Loading Amination" />
            </div>
        )
    }
}
