import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
    return(
        <div> 
         {
            robots.map((user,i) => {
                return < Card 
                    key={robots[i].email}
                    first_name={robots[i].first_name} 
                    last_name={robots[i].last_name} 
                    email={robots[i].email}
                />;
            }
        )
    }
    </div> 
  );
}

export default CardList;