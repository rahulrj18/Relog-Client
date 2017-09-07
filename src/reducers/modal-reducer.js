import {SHOW_MODAL} from '../actions/types';
const intialState = {
	show:false,
}

export default function(state=intialState,action){
	switch (action.type) {
		case SHOW_MODAL:
			return {...state,show:action.payload};
			break;
	}
	return state;
}