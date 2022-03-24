import {combineReducers} from 'redux'; 

import tema from './datosTema-reducer';
import credentials from './loginData-reducer';



const rootReducer = combineReducers({
    credentials, tema
    // ,search
});

export default rootReducer;