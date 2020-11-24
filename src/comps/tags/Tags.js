import React, { Component } from 'react';
import './tags.css';
import Title from '../main_title/title';

class Tags extends Component {

    state = {
        tag_list: []
    }

    tags = ( tags ) => {
        let tag = tags.split(',');
        return tag.map( ( data, key ) => (
            <span
                className="tag_text"
                key={ key }>{ data }</span>
        ));
    }

    componentDidMount() {

    }

    render() {
        return(
            <div className="tags">

                <Title text="Tags related to this page" />

                <div className="tag-block">
                    { this.tags(this.props.tags) }
                </div>
                
            </div>
        )
    }
}

export default Tags;