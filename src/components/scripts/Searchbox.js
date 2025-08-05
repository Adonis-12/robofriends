import React from 'react';
import '../styles/searchbox.css';

const Searchbox = ({searchChange}) => {
    return(
        <div>
            <input type='text' 
            placeholder='Search for your friend here' 
            className=' search'
            onChange={searchChange} 
            />    
        </div>
    )
}

export default Searchbox;