import {applyMiddleware, createStore} from 'redux';
import { save, load } from "redux-localstorage-simple";
import reducer from './reducers';

//poner solo los elementos d index de controllers
const createStoreWithMiddleware = applyMiddleware(
	save({ states: ['theme', 'modify_credentials','login', 'logout','post' ] })
)(createStore);
 
const store = createStoreWithMiddleware(
    reducer,
    load({ states: ['theme', 'modify_credentials', 'login', 'logout','post'] }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
    })
);





export default store;

