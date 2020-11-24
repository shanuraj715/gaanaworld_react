import React, { Component } from 'react';
import './player.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';


class Player extends Component {
	state = {
		audio: {},
		playing: false,
		current_time: '00:00',
		current_pos: 0,
		duration: 0
	}

	createAudioObj = ( audio_obj ) => {
		this.setState({
			audio: audio_obj
		});
		
	}

	playPause = () => {
		if( this.state.audio.paused ){
			this.play_song();
		}
		else{
			this.pause_song();
		}
		if(this.state.duration !== Math.floor(this.state.audio.duration)){
			this.setState({
				duration: Math.floor(this.state.audio.duration)
			});
			console.log("Duration Updated");
		}
	}

	play_song = () => {
		this.state.audio.play();
		this.timeout = setInterval(() => {
			this.updateTime();
			this.setState({ current_pos: this.state.audio.currentTime});
			let player_slider = document.getElementById('audio_seeker');
			player_slider.value = this.state.current_pos;

			if( Math.floor(this.state.current_pos) === this.state.duration ){
				console.log("called");
				this.pause_song();
			}
		}, 1000);
		this.setState({
			playing: true
		});
		
		console.log("Playing");
	}

	pause_song = () => {
		this.state.audio.pause();
		this.setState({
			playing: false
		})
		clearInterval(this.timeout);
		console.log("Paused");
	}

	updateTime = () => {
		this.setState({
			current_time: this.convertTime( this.state.audio.currentTime)
		})
	}

	convertTime = ( duration ) => {
		let min = 0;
		let sec = 0;

		min = Math.floor(duration / 60);
		sec = Math.floor(duration - ( 60 * min));

		min = ('0' + min).slice(-2);
		sec = ('0' + sec).slice(-2);
		let string = min + ':' + sec;
		return string;
	}


	progress = () => {

	}

	seekVolume = () => {

	}

	seekSong = ( ) => {
		let player_slider = document.getElementById('audio_seeker');
		this.setState({ current_pos: player_slider.value }, () => {
			const audio = document.getElementById('song_player');
			audio.currentTime = player_slider.value;
		});
		
	}

	componentDidMount(){
		const audio = document.getElementById('song_player');
		this.createAudioObj( audio );
	}

	componentWillUnmount(){
		clearInterval( this.timeout );
	}

	componentDidUpdate(){
		clearInterval(this.timeout);
	}
	
    render() {
        return(
            <div className="area2">
				<div className="player_container">

					{/* <ReactAudioPlayer src={ this.props.data[0].file_path } controls /> */}

					<audio id="song_player" src={ this.props.data[0].file_path} preload="metadata"></audio>
					
					<div className="player">
						<div className="play-pause_btn_cont">
							<span className="play-pause" onClick={ this.playPause }>
							<FontAwesomeIcon icon={ this.state.playing ? faStop : faPlay } />
                            </span>
						</div>

						<div className="audio_player">
							<span className="playing_audio_duration">{ this.state.current_time }</span>
							<input
								type="range"
								id="audio_seeker"
								min="0"
								max={ this.state.duration !== 0 ? this.state.duration : 300 }
								defaultValue={ Math.floor(this.state.current_pos) }
								step="1" 
								onChange={ this.seekSong } />

							<input type="range" id="volume_seeker" min="0" max="100" defaultValue="100" />
						</div>
					</div>
				</div>

				<div className="song_download_btn_block">
					<a href={ this.props.data[0].file_path } className="song_download_btn" rel="nofollow">Download Now</a>
				</div>
			</div>
        );
    }
}

export default Player;