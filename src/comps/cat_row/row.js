import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import './row.css';
import { Link } from 'react-router-dom';

class Row extends Component {
    render() {
        return(
            <div className="category_block">
                <p className="category_line">
                    <span className="category_icon">
                        <FontAwesomeIcon icon={ faAngleDoubleRight } />
                    </span>
                    <Link className="category_link" to={ this.props.url }>{ this.props.text }</Link>
                </p>
            </div>
        )
    }
}

export default Row;