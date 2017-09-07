import {
	FETCHED_POST,
	FETCHED_POST_ERROR,
	FETCHING_POST
} from '../actions/types';

const intialState = {
	isFetching:false,
	isFetched:false,
	data:null,
	error:null
}

export default function(state=intialState,action){
	switch(action.type){
		case FETCHING_POST:
			return {...state,isFetching:true,isFetched:false};
			break;
		case FETCHED_POST:
			return {...state,isFetching:false,isFetched:true,data:action.payload};
			break;
		case FETCHED_POST_ERROR:
			return {...state,isFetching:false,isFetched:false,error:action.payload};
			break;
	}
	return state;
}