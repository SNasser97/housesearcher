import React from 'react';
import { VscSearch } from 'react-icons/vsc';

// styles for react icon
const iconStyles = { 
	fill: '#fff', 
	position: 'absolute', 
	background: '#DA4453',
	height:'30px',
	width:'30px',
	padding: '6px',
	left: '-20px',
	top: '-22px',
	border: '1px solid #DA4453',
	borderRadius:"100% 0 0 100%",
}

const SearchBox = ({ searchChange }) => {
	console.log({ comp: 'SEARCHBOX', time: new Date() });
	return (
		<div className='search'>
			<label htmlFor='search' aria-label="Search:">
				<VscSearch style={iconStyles} size="1.5em" />
			</label>
			<input id='search' onChange={ searchChange } className='search__input' type='search' placeholder='search for property type' />
		</div>
	);
}

export default SearchBox;