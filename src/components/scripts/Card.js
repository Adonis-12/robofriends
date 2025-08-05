import React from 'react';

const Card = ({ first_name, email, last_name }) => {
  return (
    <div className='tc grow bg-black br3 pa3 ma2 dib ba bw1 b--white shadow-5 white' >
      <img alt='robots' src={`https://robohash.org/${first_name}?set=set2`} />
      <div>
        <h2>{first_name}  {last_name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;