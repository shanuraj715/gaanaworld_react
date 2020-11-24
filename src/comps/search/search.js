import React, { Component } from 'react';
import './search.css';

class Search extends Component {
    
    render() {
        return(
            <div className="search_container">
                <div className="search_cont">
                    <input type="text" className="search_box" id="search_input" required="required" name="search" />
                    <input type="submit" className="search_btn" id="search_btn" value="Search" />
                </div>
            </div>
        )
    }
}

export default Search;