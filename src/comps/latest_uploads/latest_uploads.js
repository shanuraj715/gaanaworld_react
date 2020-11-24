import React, {Component} from 'react';
import Title from '../main_title/title';
import Song from'../song_row/row';
import './latest.css';
import { SITE_URL, API_URL } from '../../config';
import { trimTitle } from '../../functions/functions.js';
import Loading from '../loading/loading_songs/Loading';

class LatestSongs extends Component {

    state = {
        latest_post : [],
        is_loading: true
    }

    componentDidMount(){
        const endpoint = API_URL + 'getSongsList.php?order_by=song_id DESC&limit=20';
        this.fetchItems(endpoint);
    }

    fetchItems = ( endpoint ) => {
        fetch( endpoint )
        .then(result => result.json())
        .then(result => {
            this.setState({
                latest_post : result,
                is_loading: false
            });
            // console.log(result);
        });
    }
    
    song = () => {
        return this.state.latest_post.map( ( data, key ) => <Song
            url= { SITE_URL + 'song/' + data.song_id + '/' + trimTitle(data.title) }
            title= { data.title }
            first={ data.category_name }
            second={ data.singer_name }
            third={ data.size }
            key={ key } />
        );
    }

    render() {
        return(
            <div className="new_uploads_container">

                <Title text="New Added Songs"/>

                { !this.state.is_loading ? this.song() : <Loading /> }

                {/* { this.state.latest_post.map( (each, key) => this.song( each, key ))} */}
            </div>
        )
    }
}

export default LatestSongs;