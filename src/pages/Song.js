import React, { Component } from 'react';

import Header from '../comps/header/header';
import Search from '../comps/search/search';
import Breadcrumb from '../comps/breadcrumb/Breadcrumb';
import OtherFeatures from '../comps/other_features/other_features';
import RelatedFiles from '../comps/related_files/Related_Files';
import Footer from '../comps/footer/footer';
import PageDescription from '../comps/page_description/Page_description';
import Tags from '../comps/tags/Tags';
import SongData from '../comps/song_view/Song_view';
import Share from '../comps/share/Share';

import HOC from '../comps/HOC/hoc';
import { API_URL } from '../config';
import LoadingRipple from '../comps/loading/loading_ripple/Loading';

class Song extends Component {

    state = {
        song_id: 0,
        song_cat_id: 0,
        song_singer_id: 0,
        song_album_id: 0,
        song_data: [],
        is_received: false
    }

    componentDidMount(){
        this.getSongId();
    }

    componentDidUpdate(prevProps, prevState) {
		let { pathname } = this.props.location;
		let { pathname: prevPathname } = prevProps.location;

        pathname = pathname.split('/')[2] ;
		prevPathname = prevPathname.split('/')[2] ;

		if(this.props.location.pathname && pathname !== prevPathname)
        	this.getSongId();
	}

    getSongId = () => {
        this.setState({
            is_received: false,
            song_data: []
        }, () => {
            let song_id = 0;
            let url = window.location.pathname;
            let url_split = url.split('/');

            url_split.map( (data, key ) => {
                if(data === 'song'){
                    song_id = url_split[key + 1];
                    this.setState({
                        song_id: song_id
                    }, () => {
                        const endpoint = API_URL + 'songDetail.php?where=song_id=' + this.state.song_id;
                        this.fetchData( endpoint );
                    });
                }
                return true;
            });
        });
        
    }

    fetchData = ( endpoint ) => {
        fetch( endpoint )
        .then( result => result.json())
        .then( result => {
            this.setState({ 
                song_data: result,
                is_received: true });
        })
        .catch( (err ) => {
           console.log(err); 
        });
    }


    render(){
        return(
            <HOC>
                <Header />
                <Search />
                <Breadcrumb page="category" />
                { this.state.is_received ? <SongData data={ this.state.song_data } /> : <LoadingRipple /> }
                { this.state.is_received ? <Share /> : null }
                { this.state.is_received ?
                    <PageDescription
                        user={ this.state.song_data[0].user_name }
                        category={ this.state.song_data[0].category_name} /> :
                null }
                { this.state.is_received ? <Tags tags={ this.state.song_data[0].tags } /> : null }
                { this.state.is_received ?
                    <RelatedFiles
                        category={ this.state.song_data[0].category_id }
                        album={ this.state.song_data[0].album_id } /> :
                null }
                <OtherFeatures />
                <Footer />
            </HOC>
        )
    }
}

export default Song;