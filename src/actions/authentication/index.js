import axios from 'axios';
import {browserHistory as history} from 'react-router';
import {
	AUTH_USER,
	AUTH_ERROR,
	UNAUTH_USER,
	LOADING,
} from "../types";

const ROOT_URL = "http://localhost:8000";
export function signin({username,password}){
	return function(dispatch){
		dispatch({type:LOADING});
		axios.post(`${ROOT_URL}/api/auth/token/`,{username,password})
		.then((response)=>{
			dispatch({type:AUTH_USER});
			localStorage.setItem('token',response.data.token);
			//console.log(history);
			history.push('/timeline');
		})
		.catch(()=>{
			dispatch(authError('Bad Login Info'));
		});
	}
}

export function signout(){
	localStorage.removeItem('token');
	return function(dispatch){
		dispatch({type:UNAUTH_USER});
	}
}

export function authError(error){
	return{
		type:AUTH_ERROR,
		payload:error,
	}
}