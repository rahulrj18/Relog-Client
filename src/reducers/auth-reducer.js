import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR,
	LOADING
} from '../actions/types';

export default function(state={},action){
	switch(action.type){
		case LOADING:
			return {...state,authenticating:true,authenticated:false};
		case AUTH_USER:
			return {...state,authenticating:false,authenticated:true};
			break;
		case UNAUTH_USER:
			return {...state,authenticating:false,authenticated:false};
			break;
		case AUTH_ERROR:
			return {...state,error:action.payload}
	}
	return state;
}