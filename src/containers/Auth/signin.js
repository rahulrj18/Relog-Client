import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Field,reduxForm} from 'redux-form';
import {renderInput} from '../../utils/redux-form-fields';
import * as actions from '../../actions/authentication';

class Signin extends Component{
	formSubmit(value){
		const {signin} = this.props;
		signin(value);
	}

	render(){
		const {authenticating} = this.props; 
		const {handleSubmit} = this.props;
		return(
			<div className="conatiner">
				<div className="columns">
					<div className="column col-4 centered">
						<form onSubmit={handleSubmit(this.formSubmit.bind(this))}>
							<Field 
							component={renderInput} 
							divClassName="form-group" 
							inputClassName="form-input" 
							label="Username" 
							name="username" 
							type="text" 
							placeholder="Enter Username"
							/>
							<Field 
							component={renderInput} 
							divClassName="form-group" 
							inputClassName="form-input" 
							label="Password" 
							name="password" 
							type="password" 
							placeholder="Enter Password"
							/>
							<div className="form-group">
							  <button type="submit" 
							  className={authenticating?('btn btn-primary btn-lg loading'):('btn btn-lg btn-primary')}>
							  Sign In
							  </button>
							</div>
						</form>
					</div>
				</div>
			</div>

		);
	}
}

function mapStateToProps(state){
	//console.log(state);
	return{
		authenticating:state.auth.authenticating,
		authenticated:state.auth.authenticated
	}
}

Signin = reduxForm({
	form:'Signin',
	fields:['username','password']
})(Signin);

export default connect(mapStateToProps,actions)(Signin);