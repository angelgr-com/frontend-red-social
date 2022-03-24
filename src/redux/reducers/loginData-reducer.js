import {LOGIN, LOGOUT, MODIFY_CREDENTIALS} from '../types'; 

const initialState = {
    token : '',
    user : {}
};

const loginDataReducer = (state = initialState, action) => {
  switch(action.type){
    // Saves user logged in
    case LOGIN:
      return action.payload;

    // Deletes data from user logged and sets emptys values
    case LOGOUT: 
      return initialState;

    // Modifies saved state with data received in profile.js
    case MODIFY_CREDENTIALS:
      return {...state, user: action.payload};

    default :
      return state
  }
}

export default loginDataReducer;