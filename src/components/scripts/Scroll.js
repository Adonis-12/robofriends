import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll' , height:'50vh' }}>
            {props.children}
        </div>
    )

}

export default Scroll;