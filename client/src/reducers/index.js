import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import UsersReducer  from './userReducer';


export default combineReducers({
     toastr: toastrReducer,
     UsersReducer,
});
