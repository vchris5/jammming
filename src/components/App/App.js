import React, { useCallback, useState } from 'react';

import Spotify from '../../util/Spotify';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import './App.css';

const App = () => {
	const [SearchResult, setSearchResult] = useState([]);
	const [playlistName, setPlaylistName] = useState('New Playlist');
	const [playlistTracks, setPlaylistTracks] = useState([]);

	return (
		<div>
			<h1>
				Ja<span className="highlight">mmm</span>ing
			</h1>
			<div className="App">
				<SearchBar />
				<div className="App-playlist">
					<SearchResult />
					<Playlist />
				</div>
			</div>
		</div>
	);
};

export default App;
