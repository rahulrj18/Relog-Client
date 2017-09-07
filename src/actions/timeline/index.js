import axios from 'axios';
import {browserHistory as history} from 'react-router';
import {
	FETCHED_POST,
	FETCHED_POST_ERROR,
	FETCHING_POST,
	SHOW_MODAL,
	DROP_FILES,
	CLOSE_PREVIEW,
	POSTING

} from "../types";

import {tokenHeader} from '../../utils/headers';

const ROOT_URL = "http://localhost:8000";
const token = localStorage.getItem('token');
export function fetchPosts(){
	const URL = `${ROOT_URL}/api/post/`

	return function(dispatch){
		dispatch({type:FETCHING_POST});
		axios.get(URL,tokenHeader())
		.then((response)=>{
			setTimeout(()=>{
				dispatch({type:FETCHED_POST,payload:response.data});
			},1000);	
		})
		.catch((error)=>{
			setTimeout(()=>{
				dispatch({type:FETCHED_POST_ERROR,payload:error});
			},1000);
		});
	}
}

export function handleModal(prevstate){
	return {type:SHOW_MODAL,payload:!prevstate};
}

export function DropFiles(files){
	return {type:DROP_FILES,payload:files};
}

export function closePreview(files,index){
	console.log(files.splice(index,1));
	return {type:CLOSE_PREVIEW,payload:files};
}

export function createPost(formValue){
	const formData = new FormData();
	formData.append('title',formValue.title||'');
	if (formValue.file) formData.append('file',formValue.file);
	console.log(formValue);
	console.log(formData);
	axios.post('http://localhost:8000/api/post/create/',formData,tokenHeader());
	return {type:POSTING};
}