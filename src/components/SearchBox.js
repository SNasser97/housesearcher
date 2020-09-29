import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div className='search'>
			<input onChange={ searchChange } className='search__input tc' type='search' placeholder='search for property type' />
		</div>
	);
}

export default SearchBox;