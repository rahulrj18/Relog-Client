import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import authReducer from './auth-reducer';
import postReducer from './post-reducer';
import modalReducer from './modal-reducer';
import fileReducer from './file-reducer';

const rootReducer = combineReducers({
	form, // equivalent to form:form es6 syntax
	auth:authReducer,
	posts:postReducer,
	modal:modalReducer,
	upload:fileReducer
});

export default rootReducer;