import React from 'react';
import {render} from 'react-dom';

//redux
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
//middlewares
import reduxThunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
//react-router
import {Router,Route,browserHistory} from 'react-router';
//reducer
import rootReducer from './reducers';
import routes from './config/routes';
import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR,
	LOADING
} from "./actions/types";
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);
const rootElement = document.getElementById('root');  
const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}
render(
	<Provider store = {store}>
		<Router history = {browserHistory} routes={routes}/>
	</Provider>
	,rootElement);




