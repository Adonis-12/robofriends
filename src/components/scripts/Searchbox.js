import React from 'react';
import '../styles/searchbox.css';

const Searchbox = ({searchChange}) => {
    return(
        <div>
            <input type='text' 
            placeholder='Search Here' 
            className='pa3 ma3 b--green bg-color-lightblue search'
            onChange={searchChange} 
            />    
        </div>
    )
}

export default Searchbox;