import React from 'react';
import './SearchResult.css';

import TrackList from '../TrackList/TrackList';

const SearchResult = (props) => {
	return (
		<div className="SearchResult">
			<h2>Results</h2>
			<TrackList />
		</div>
	);
};

export default SearchResult;
