import {ID,POST,THEME} from '../types'; 

const initialState = {
  post: "",
  theme: "",
  id:""
};

const postReducer = (state = initialState, action) => {
  switch(action.type){
      //Saves Post
      case POST :
        return action.payload

      case THEME :
        return  action.payload

      case ID :
        return {state, id: action.payload};


      default :
          return state
  }
}

export default postReducer;