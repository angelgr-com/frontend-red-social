import {POST,THEME} from '../types'; 

const initialState = {
  post: "",
  theme: ""
};

const postReducer = (state = initialState, action) => {
  switch(action.type){
      //Saves Post
      case POST :
          return action.payload;

      case THEME :
        return action.payload;


      default :
          return state
  }
}

export default postReducer;