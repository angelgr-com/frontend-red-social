import {combineReducers} from 'redux'; 

import theme from './themData-reducer';
import credentials from './loginData-reducer';
import post from './postData-reducer';



const rootReducer = combineReducers({
    credentials, theme, post
    // ,search
});

export default rootReducer;