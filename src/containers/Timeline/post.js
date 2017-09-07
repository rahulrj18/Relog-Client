import React,{Component} from 'react';
import Modal from './modal';
import AddPostButton from './addpostbutton';
import Eachpost from './eachpost';

class Post extends Component{
	render(){
		const {data} = this.props;
		return(
			<div className="columns">
				<Eachpost data={data}/>
				<AddPostButton/>
			</div>
		);
	}
}

export default Post;