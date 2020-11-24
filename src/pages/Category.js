import React, { Component } from 'react';

import Header from '../comps/header/header';
import Search from '../comps/search/search';
import Breadcrumb from '../comps/breadcrumb/Breadcrumb';
import OtherFeatures from '../comps/other_features/other_features';
import Footer from '../comps/footer/footer';
import PageDescription from '../comps/page_description/Page_description';
import Tags from '../comps/tags/Tags';

import Title from '../comps/main_title/title';
import SongRow from '../comps/song_row/row';
import CatRow from '../comps/cat_row/row';
import { SITE_URL, API_URL } from '../config';
import { trimTitle } from '../functions/functions.js';

import HOC from '../comps/HOC/hoc';

import LoadingCats from '../comps/loading/loading_categories/Loading';
import LoadingSongs from '../comps/loading/loading_songs/Loading';

class Category extends Component {

	state = {
		url: '',
		category_id: 0,
		this_category_details: [],
		categories: [],
		songList: [],
		categories_available: false,
		categories_loading: true,
		is_songs_loading: true,
		is_category_fetched: false
	}

	// construct( props ){
		// super( props );
	// }

	componentDidMount(){
        this.getCatId();
	}

	componentDidUpdate(prevProps, prevState) {
		let { pathname } = this.props.location;
		let { pathname: prevPathname } = prevProps.location;

		pathname = pathname.split('/')[2] ;
		prevPathname = prevPathname.split('/')[2] ;

		if(this.props.location.pathname && pathname !== prevPathname)
        	this.getCatId();
	}

	getCatId = () => {
		this.setState({ 
			categories: [],
			songList: [],
			categories_available: false,
			is_category_fetched: true
		}, () => {
			let category_id = 0;
			let url = window.location.pathname;
			let url_split = url.split('/');
			// console.log(url_split);
			url_split.map( ( data, key) => {
				if(data === 'category'){
					category_id = url_split[key + 1];
					this.setState({
						category_id: category_id
					}, () => {
						const endpoint = API_URL + 'getSongsList.php?where=category_id=' + this.state.category_id + '&order_by=song_id DESC&limit=20';
						const this_cat_endpoint = API_URL + 'getCategoryList.php?where=category_id=' + this.state.category_id;
						const categories_endpoint = API_URL + 'getCategoryList.php?where=parent=' + this.state.category_id;
						// console.log( categories_endpoint);
						this.fetchSongs(endpoint);
						this.fetchThisCat( this_cat_endpoint );
						this.fetchCategories( categories_endpoint );
					});
				}
				return true;
			});
		});
		
	}

	fetchThisCat = ( endpoint ) => {
		fetch( endpoint )
		.then( result => result.json())
		.then( result => {
			// console.log();
			this.setState({
				this_category_details: result,
				category_id: result[0].category_id
			}, () => console.log(this.state.category_id));
		})
		.catch( ( err ) => console.log(err));
	}

	fetchSongs = ( endpoint ) => {
		fetch( endpoint )
		.then( result => result.json())
		.then( result => {
			this.setState({
				songList: result,
				is_songs_loading: false
			});
		})
		.catch( ( err ) => console.log(err));
	}

	fetchCategories = ( categories_endpoint ) => {
		fetch( categories_endpoint )
		.then( result => result.json())
		.then( result => {
			// console.log();
			this.setState({
				categories: result,
				categories_loading: false
			});
			if(result.length !== 0){
				this.setState({
					categories_available: true,
					is_category_fetched: true
				});
			}
		})
		.catch( ( err ) => console.log(err));
	}

	songs = ( data, key ) => {
		// console.log(typeof(this.state.songList));
		return this.state.songList.map( ( each, key ) => <SongRow
			url={ SITE_URL + 'song/' + each.song_id + '/' + trimTitle(each.title) }
			title={ each.title }
			first={ each.category_id }
			second={ each.singer }
			third={ each.size }
			key={ key } /> );
	}

	categories = ( data, key ) => {
		return this.state.categories.map( ( each, key ) => <CatRow
			url={ SITE_URL + 'category/' + each.category_id }
			text={ each.category_name }
			key={ key } /> );
	}

	breadcrumb = () => (
		<Breadcrumb id={ this.state.category_id } for="category" />
	)

	render(){
		
		return(
			<HOC>
				<Header />
				<Search />
				
				{ this.state.category_id !== 0  ? this.breadcrumb() : null }

				{ this.state.categories_loading ? <LoadingCats /> :  this.state.categories.length !== 0 ? <Title text="Bollywood All Categories List" /> : null }

				{ this.categories() }

				{ this.state.is_songs_loading ? <LoadingSongs /> : this.state.songList.length !== 0 ? <Title text="Bollywood All Song List" /> : null }

				{ this.songs() }

				{ this.state.this_category_details.length !== 0 ?
                    <PageDescription
                        user={ this.state.this_category_details.belong_to_user }
                        category={ this.state.this_category_details[0].category_name } /> :
                null }

				{ this.state.this_category_details.length !== 0 ?
					<Tags tags={ this.state.this_category_details[0].tags } /> :
				null }

				<OtherFeatures />
				<Footer />
			</HOC>
		)
	}
}

export default Category;