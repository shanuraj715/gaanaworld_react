import React, { Component } from 'react'

import Title from '../main_title/title';
import SongRow from '../song_row/row';
import { API_URL } from '../../config';
import { trimTitle } from '../../functions/functions';
import { SITE_URL } from '../../config';
import Loading from '../loading/loading_songs/Loading';

export default class Related_Files extends Component {

	state = {
		related_files: [],
		is_loading: true
	}

	componentDidMount(){
		const endpoint = API_URL + 'relatedFiles.php?category_id=' + this.props.category + '&album_id=' + this.props.album + '&limit=8';
		this.fetchItem( endpoint );
	}

	fetchItem = ( endpoint ) => {
		fetch( endpoint )
		.then( result => result.json())
		.then( result => {
			this.setState({
				related_files: result,
				is_loading: false
			});
		})
	}

	songs = () => {
		// console.log(this.state.related_files);
		return this.state.related_files.map( ( data, key ) => <SongRow
				url={ SITE_URL + 'song/' + data.song_id + '/' + trimTitle(data.title) }
				title={ data.title }
				first={ data.category_name }
				second={ data.album_name }
				third={ data.size }
				key={ key } />
		);
	}



	render() {
		return (
			<div className="related_files">
				<Title text="Related Files" />
				{ !this.state.is_loading ? this.songs() : <Loading /> }
			</div>
		)
	}
}
