import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/timeline';
import Loading from '../../components/utils/loading';
import AddPostButton from './addpostbutton';
import Eachpost from './eachpost';
import Modal from './modal';


class Timeline extends Component{
	componentDidMount() {
		this.props.fetchPosts();
	}
	render(){
		const {isFetching,isFetched,data} = this.props.posts;
		//console.log(isFetching,isFetched);
		return (
			<div className="container">
				{!isFetching?(!isFetched?" ":<Eachpost data={data}/>):(<Loading/>)}
				<Modal/>
				<AddPostButton/>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		posts:state.posts
	}
}

export default connect(mapStateToProps,actions)(Timeline);