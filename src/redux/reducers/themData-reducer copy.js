import {THEME} from '../types'; 

const initialState = {
    theme: ""
};

const themeReducer = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO LOS DATOS DEL GENERO
        case theme :// se llamara post
            return action.payload;

        default :
            return state
    }
}

export default themeReducer;