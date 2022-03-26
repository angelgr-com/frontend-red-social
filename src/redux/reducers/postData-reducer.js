import {POST} from '../types'; 

const initialState = {
  post: ""
};

const postReducer = (state = initialState, action) => {
  switch(action.type){
      //Saves Post
      case POST :
          return action.payload;

      default :
          return state
  }
}

export default postReducer;