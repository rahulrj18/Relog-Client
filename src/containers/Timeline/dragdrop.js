import React,{Component} from 'react';
import Dropzone from 'react-dropzone';
import {connect} from 'react-redux';
import * as actions from '../../actions/timeline';

class DragDrop extends Component{
	
	onDrop(files){
		this.props.DropFiles(files);
	}

	render(){
		const {files} = this.props;
		const {DropFiles} = this.props;
		if (files.length > 0) return null;
		return (
			<Dropzone className="drop-zone" onDrop={DropFiles} multiple={true}>
               	<div className="has-icon-left">
				  <input className="form-input" placeholder="File Upload" />
				  <i className="form-icon icon icon-photo"></i>
				</div>
            </Dropzone>
		);
	}
}

function mapStateToProps(state){
	return{
		files:state.upload.files
	}
}

export default connect(mapStateToProps,actions)(DragDrop);