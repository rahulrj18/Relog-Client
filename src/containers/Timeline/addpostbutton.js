import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/timeline';

class AddPostButton extends Component{
	displayUploadForm(){
		const {showmodal} = this.props;
		this.props.handleModal(showmodal);
	}
	render(){
		//console.log(this.props.showmodal);
		return(
			<div className="add">
				<button 
				className="btn btn-lg btn-action circle" 
				onClick={this.displayUploadForm.bind(this)}>
				<i className="icon icon-plus"></i>
				</button>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		showmodal:state.modal.show
	}
}
export default connect(mapStateToProps,actions)(AddPostButton);