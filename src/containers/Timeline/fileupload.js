import React,{Component} from 'react';
import Dropzone from 'react-dropzone';
import {connect} from 'react-redux';
import * as actions from '../../actions/timeline';

class FileUpload extends Component {
	close(index){
    	const {files} = this.props.upload;
    	console.log('called',index);
    	this.props.closePreview(files,index);
    }
    
    onDrop(files){
		this.props.DropFiles(files);
	}

    renderDropZone(){
		//console.log(this.state);
		const {files} = this.props.upload;
		if (files.length > 0) return null;
		return(
            <Dropzone className="drop-zone" onDrop={this.onDrop.bind(this)} multiple={false}>
               	<div className="has-icon-left">
				  <input className="form-input" placeholder="File Upload" />
				  <i className="form-icon icon icon-photo"></i>
				</div>
            </Dropzone>
		);
	}


	renderImagePreview() {
        const {files} = this.props.upload;
        //console.log(files);
        if (files.length === 0) return null;
        //console.log(files);
        return files.map((file,index) => (
        	<div className="form-group form-group-modal-2" key={file.name}>
        		<a 
        			className="circle btn btn-clear btn-clear-new close-preview" 
        			aria-label="Close" 
        			onClick={ () => this.close(index)}>
        		</a>
            	<img src={file.preview} className="img-responsive"/>
        	</div>

        ));
    }

	render(){
		return(
			<div className="form-group form-group-modal">
				{this.renderDropZone()}
				{this.renderImagePreview()}
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		upload:state.upload,
	}
}


export default connect(mapStateToProps,actions)(FileUpload);



