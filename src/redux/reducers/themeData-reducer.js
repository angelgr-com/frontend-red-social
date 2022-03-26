import {THEME} from '../types'; 

const initialState = {
    theme: ""
};

const themeReducer = (state = initialState, action) => {
    switch(action.type){
        //Saves Theme
        case THEME :
            return action.payload;

        default :
            return state
    }
}

export default themeReducer;