import React, { Component } from 'react';
import './song_data.css';
import { SITE_URL } from '../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faMusic } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

class SongData extends Component {

    render() {
        return(
            <div className="song_area1">
				<div className="song_image_block">
					<img src={ this.props.data[0].image } className="song_image" alt={ this.props.data[0].title + ' image' }/>
				</div>
				<div className="song_meta">
					<div className="song_title_block">
						<h1 className="song_title">
							<span className="song_title_icon">
								<FontAwesomeIcon icon={ faMusic } />	
							</span>
							{ this.props.data[0].title }
						</h1>
					</div>

					<div className="song_meta_details_block">
						<span className="song_category">
							<span className="song_meta_icon">
								<FontAwesomeIcon icon={ faAngleDoubleRight } />
							</span>
							Category : 
							<Link to={ SITE_URL + 'category/' + this.props.data[0].category_id } className="song_category_link"> { this.props.data[0].category_name }</Link>
						</span>


						<span className="song_singer">
							<span className="song_meta_icon">
								<FontAwesomeIcon icon={ faAngleDoubleRight } />
							</span>
							Singer : 
							<Link to={ SITE_URL + 'singer/' + this.props.data[0].singer } className="song_singer_link"> { this.props.data[0].singer_name }</Link>
						</span>


						<span className="song_upload_dt">
							<span className="song_meta_icon">
								<FontAwesomeIcon icon={ faAngleDoubleRight } />
							</span>
							Added : <span className="uploaded_on_dt">{ this.props.data[0].upload_date + ' ' + this.props.data[0].upload_time }</span>
						</span>

						
						<span className="song_upload_dt">
							<span className="song_meta_icon">
								<FontAwesomeIcon icon={ faAngleDoubleRight } />
							</span>
							Album : <Link to={ SITE_URL + 'show-album/' + this.props.data[0].album_id + '/' + this.props.data[0].album_name } className="song_album_name">{ this.props.data[0].album_name }</Link>
						</span>
						

						<span className="song_size">
							<span className="song_meta_icon">
								<FontAwesomeIcon icon={ faAngleDoubleRight } />
							</span>
							File Size : <span className="song_size_show">{ this.props.data[0].size }</span>
						</span>


						<span className="song_length">
							<span className="song_meta_icon">
								<FontAwesomeIcon icon={ faAngleDoubleRight } />
							</span>
							Length : <span className="song_length_show">{ this.props.data[0].length }</span>
						</span>


						<span className="song_total_download">
							<span className="song_meta_icon">
								<FontAwesomeIcon icon={ faAngleDoubleRight } />
							</span>
							Total Downloads : <span className="song_total_download_show">{ this.props.data[0].total_downloads + ' Times' }</span>
						</span>
					</div>
						

				</div>
			</div>
        )
    }
}

export default SongData;