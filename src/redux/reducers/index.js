import {combineReducers} from 'redux'; 


import credentials from './userData-reducer';
import post from './postData-reducer';



const rootReducer = combineReducers({
    credentials, post
    // ,search
});

export default rootReducer;