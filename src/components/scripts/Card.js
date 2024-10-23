import React from 'react';

const Card = ({ first_name, email, last_name }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${first_name}?size=200x200`} />
      <div>
        <h2>{first_name}  {last_name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;