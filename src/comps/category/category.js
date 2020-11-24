import React, { Component } from 'react';
import Title from '../main_title/title';
import CategoryRow from '../cat_row/row.js';
import { SITE_URL, API_URL } from '../../config';
import Loading from '../loading/loading_categories/Loading';

class HomeCats extends Component {

    state = {
        categories: [],
        is_loading: true
    }

    componentDidMount(){
    	const endpoint = API_URL + 'getCategoryList.php?where=parent=0';
    	this.fetchItems(endpoint);
    }

    fetchItems = ( endpoint ) => {
    	fetch(endpoint)
    	.then( result => result.json())
    	.then( result => this.setState({
            categories: result,
            is_loading: false
        }));
    }

    cat_row = () => {
        return this.state.categories.map((data, key) => <CategoryRow 
            url={ SITE_URL + 'category/' + data.category_id }
            text={ data.category_name }
            key={ key } />
        )
    }

    render() {
        return(
            <div className="categories_container">

                <Title text="Music Categories" />

                { !this.state.is_loading ? this.cat_row() : <Loading /> }

                {/* { this.state.categories.map( (each, key) => this.cat_row(each, key))} */}

                <CategoryRow 
           			url={ SITE_URL + 'albums/424145' }
            		text="Hindi Albums" />

            	<CategoryRow 
            		url={ SITE_URL + 'singer-list' }
            		text="Songs by Singer Name" />

            </div>
        )
    }
}

export default HomeCats;