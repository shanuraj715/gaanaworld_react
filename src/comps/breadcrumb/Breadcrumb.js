import React, { Component } from 'react';
import './breadcrumb.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import { SITE_URL, API_URL } from '../../config';
import HOC from '../HOC/hoc';

class Breadcrumb extends Component {

    state = {
        breadcrumb: [],
        is_loading: true
    }

    componentDidMount() {
        this.api();
    }

    componentDidUpdate(){
        // if( !this.state.is_loading ){
        //     this.api();
        // }
    }

    api = () => {
        if(this.props.for === 'category'){
            const endpoint = API_URL + 'getBreadcrumb.php?category_id=' + this.props.id;
            this.fetchBreadcrumb( endpoint );
        }
    }

    fetchBreadcrumb = ( endpoint ) => {
        fetch( endpoint )
        .then( result => result.json())
        .then( result => {
            this.setState({
                breadcrumb: result,
                is_loading: false
            });
        })
        .catch( ( err ) => {
            console.log(err);
        });
    }

    breadcrumb = () => {
        return this.state.breadcrumb.map( ( data, key ) => (
            <HOC key={ key }>
                <span className="breadcrumb-saperator">
                    <FontAwesomeIcon icon={faCaretRight} />
                </span>
                <Link className="breadcrumb_link" to={ SITE_URL + 'category/' + data.id } >{ data.title }</Link>
            </HOC>
        ));
    }



    render() {
        return(
            <div className="breadcrumb">
                <p className="breadcrumb_row">
                    <Link className="breadcrumb_link" to={ SITE_URL }>Home</Link>
                    { this.breadcrumb() }
                </p>
            </div>
        )
    }
}

export default Breadcrumb;