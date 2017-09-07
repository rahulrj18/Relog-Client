import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import {renderFileInput} from '../../utils/redux-form-fields';
import {connect} from 'react-redux';
import * as actions from '../../actions/timeline';
import FileUpload from './fileupload';

class Modal extends Component{
	formSubmit(formValue){
		formValue.file = this.props.files[0]
		this.props.createPost(formValue);
	}
	close(){
		this.props.handleModal(true);
	}
	getClass(showmodal){
		return showmodal?"modal active":"modal";
	}
	render(){
		const {showmodal} = this.props;
		const modalClass = this.getClass(showmodal);
		const {handleSubmit} =this.props;
		return(
			<form className={modalClass} onSubmit={handleSubmit(this.formSubmit.bind(this))}>
				<div className="modal-overlay" aria-label="Close"></div>
				<div className="modal-container" role="document">
					<div className="modal-header">
						<a className="btn btn-clear float-right" aria-label="Close" onClick={this.close.bind(this)}></a>
						<div className="modal-title h5">Add Chips</div>
					</div>
					<div className="modal-body">
						<div className="content">
							<Field 
								component = {renderFileInput} 
								divClassName = "form-group form-group-modal"
								inputClassName = "form-input input-lg"
								type = "text"
								name = "title"
								placeholder = "Enter the title"
							/>
							<FileUpload/>
						 </div>
					</div>
					<div className="modal-footer">
						<button className="btn btn-primary" type="submit">Share</button>
						<a className="btn btn-link" onClick={this.close.bind(this)}>Close</a>
					</div>
				</div>
			</form>
			);
	}
}

function mapStateToProps(state){
	return{
		showmodal:state.modal.show,
		files:state.upload.files
	}
}

Modal = reduxForm({
	form: 'Modal',
	fields: ['title','file']	
})(Modal);

export default connect(mapStateToProps,actions)(Modal);
