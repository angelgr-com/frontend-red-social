import {POST} from '../types'; 

const initialState = {
  post: ""
};

const postReducer = (state = initialState, action) => {
  switch(action.type){
      //GUARDO EN EL ESTADO LOS DATOS DEL GENERO
      case post :// se llamara post
          return action.payload;

      default :
          return state
  }
}

export default postReducer;