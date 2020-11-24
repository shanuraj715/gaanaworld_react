import React, { Component } from 'react';

// Import Pages 
import Homepage from './pages/Homepage';
import Category from './pages/Category';
import Song from './pages/Song';
import AlbumList from './pages/AlbumList';
import AlbumPage from './pages/Album';
import SingerList from './pages/SingerList';
import SingerPage from './pages/SingerSongs';
import SearchPage from './pages/Search';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HOC from './comps/HOC/hoc';

class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Switch>
						<Route path="/" exact render={() => 
							<HOC>
								<Homepage />
							</HOC>
						} />
						<Route path='/category/:id' exact render={props=><Category {...props} />} />

						<Route path="/song/:id/:title" exact render={ props => <Song { ...props } /> } />
						<Route path="/song/:id" exact render={ props => <Song { ...props } /> } />

						<Route path="/albums" render={() => 
							<HOC>
								<AlbumList />
							</HOC>
						} />

						<Route path="/album" render={() => 
							<HOC>
								<AlbumPage />
							</HOC>
						} />

						<Route path="/singer-list" render={() => 
							<HOC>
								<SingerList />
							</HOC>
						} />

						<Route path="/singer" render={() => 
							<HOC>
								<SingerPage />
							</HOC>
						} />

						<Route path="/search" render={() => 
							<HOC>
								<SearchPage />
							</HOC>
						} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;