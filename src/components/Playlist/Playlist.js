import React, { useCallback } from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList';

const Playlist = (props) => {
	return (
		<div className="Playlist">
			<input />
			<TrackList />
			<button className="Playlist-save">Save To Spotify</button>
		</div>
	);
};

export default Playlist;
