import React,{Component} from 'react';
import Dropzone from 'react-dropzone';

class File extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error:null,
			files:[],
			success:null
		}
	}
/*	onDrop=(files)=>{
		console.log('this is',files);
        this.setState({files});
    };
*/
    onDrop(files){
    	console.log(this.state);
    	this.setState({'files':files});
    }

    closePreview(){
    	const {files} = this.state;
    	this.setState(files.pop());
    }
	renderDropZone(){
		//console.log(this.state);
		const {files} = this.state;
		if (files.length > 0) return null;
		return(
            <Dropzone className="drop-zone" onDrop={this.onDrop.bind(this)} multiple={true}>
               	<div className="has-icon-left">
				  <input className="form-input" placeholder="File Upload" />
				  <i className="form-icon icon icon-photo"></i>
				</div>
            </Dropzone>
		);
	}

	renderImagePreview() {
        const {files} = this.state;
        if (files.length === 0) return null;
        //console.log(files);
        return (
            files.map(file => (
        	<div className="form-group form-group-modal-2" key={file.name}>
        		<a 
        			className="circle btn btn-clear btn-clear-new close-preview" 
        			aria-label="Close" 
        			onClick={this.closePreview.bind(this)}>
        		</a>
            	<img src={file.preview} className="img-responsive"/>
        	</div>
        )));
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

export default File;


/*
<div className="input-group">
                    <i className="icon icon-photo"/>
                    <div className="form-input input-lg">Drop file to upload</div>
                </div>
*/
