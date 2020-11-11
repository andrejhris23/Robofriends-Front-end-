import React from 'react';

const SearchBox = ({serachfield, searchChange}) => {
    return (
        <div className='p2'>
            <input
                className='pa3 ba b--green bg-lightest-blue mb3'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
                />
        </div>
    )
}

export default SearchBox;