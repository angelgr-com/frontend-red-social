import {TEMA} from '../types'; 

const initialState = {
    tema: ""
};

const temaReducer = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO LOS DATOS DEL GENERO
        case TEMA :// se llamara post
            return action.payload;

        default :
            return state
    }
}

export default temaReducer;