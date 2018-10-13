import React from 'react';

const SearchBox = ({ handleSearch, searchTerm }) => {
	return (
		<input 
			placeholder='Search robots'
			type='search'
			className='pa3 ba b--green bg-lightest-blue'
			onChange={(e) => handleSearch(e.target.value)}
			value={searchTerm}
		/>
	)
}

export default SearchBox;