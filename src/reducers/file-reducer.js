import {
		DROP_FILES,
		CLOSE_PREVIEW
	} from '../actions/types';

const intialState = {
	error:null,
	files:[],
	success:null
}

export default function(state=intialState,action){
	switch(action.type){
		case DROP_FILES:
			return {...state,files:action.payload};
		case CLOSE_PREVIEW:
			return {...state,files:action.payload};
			break;
	}
	return state;
}