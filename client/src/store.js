import { applyMiddleware, createStore } from 'redux';
import thunk  from "redux-thunk";
import reducer from './reducers';
import {loadState, saveState} from './localstorage';
//console.log(reducer.constructor);

const persistedState = loadState();
const middleware = applyMiddleware(thunk);

const store = createStore(
     reducer,
     persistedState,
     middleware
);
store.subscribe(()=>{
     saveState( store.getState());
});


export default store;
