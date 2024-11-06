import { CHANGE_SEARCHFIELD ,
         ADD_ROBOT,
         ADD_FIRSTNAME,
         ADD_LASTNAME,
         ADD_EMAIL
        } from "./constants";

const initialState = {
    searchField:'',
    robots: JSON.parse(localStorage.getItem('robots')) || [],
    firstName:'',
    lastName:'',
    email:''
}

export const rootReducer = (state = initialState , action={}) => {
    switch(action.type){
        case CHANGE_SEARCHFIELD :
            return { ...state , searchField: action.payload}

        case ADD_ROBOT :
            const updatedRobots = [...state.robots , action.payload ];
            localStorage.setItem('robots',JSON.stringify(updatedRobots));
            return{...state , robots : updatedRobots , firstName:'', astName:'', email:''};

        case ADD_FIRSTNAME:
            return {...state , firstName:action.payload};

        case ADD_LASTNAME:
            return {...state , lastName:action.payload };

        case ADD_EMAIL:
            return {...state , email:action.payload };
    
        default:
            return state;
    }        
}

