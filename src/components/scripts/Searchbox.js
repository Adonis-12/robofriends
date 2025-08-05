import React from 'react';
import '../styles/searchbox.css';

const Searchbox = ({searchChange}) => {
    return(
        <div>
            <input type='text' 
            placeholder='Search Here' 
            className=' search'
            onChange={searchChange} 
            />    
        </div>
    )
}

export default Searchbox;