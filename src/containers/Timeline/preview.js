import React,{Component} from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions/timeline';

class Preview extends Component{
	
	close(){
		const {files} = this.props; 
		this.props.closePreview(files);
	}

	filePreview(file,index){
		console.log(index);
		return(
			<div className ="form-group form-group-modal-2" key={file.name}>
        		<a 
        			className="circle btn btn-clear btn-clear-new close-preview" 
        			aria-label="Close"
        			onClick = {this.close.bind(this)}
        		>
        		</a>
            	<img src={file.preview} className="img-responsive"/>
        	</div>
		);
	}

	render(){
		const {files,closePreview} = this.props;
		if (files.length === 0) return null;	
		return (
			<div>
				{files.map(this.filePreview.bind(this))}
			</div>
		);
	}
}
function mapStateToProps(state){
	return{
		files:state.upload.files
	}
}


export default connect(mapStateToProps,actions)(Preview);