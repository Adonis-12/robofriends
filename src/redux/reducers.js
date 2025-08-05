import { CHANGE_SEARCHFIELD ,
         ADD_ROBOT,
         ADD_FIRSTNAME,
         ADD_LASTNAME,
         ADD_EMAIL,
         GET_DATA
        } from "./constants";
import {robots} from '../robots/robots'

const initialState = {
    searchField:'',
    robots: robots,
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
            return{...state , robots : updatedRobots , firstName:'', lastName:'', email:''};

        case ADD_FIRSTNAME:
            return {...state , firstName:action.payload};

        case ADD_LASTNAME:
            return {...state , lastName:action.payload };

        case ADD_EMAIL:
            return {...state , email:action.payload };
        case GET_DATA:
            return async function getData(array){
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                return response.json();
            }
    
        default:
            return state;
    }        
}

