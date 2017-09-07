import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../../actions/authentication';

class Header extends Component{
	signoutUser(){
		this.props.signout();
	}
	renderAuthMode(){
		const {authenticated} = this.props;
		if(authenticated){
			return <a onClick={this.signoutUser.bind(this)} className="btn btn-link">Sign Out</a>
		}
		return <Link to = "/signin" className="btn btn-link">Sign In</Link>
	}
	renderTimeline(){
		const {authenticated} = this.props;
		if(authenticated) return <Link to="/timeline" className="btn btn-link">Timeline</Link>
	}
	render(){
		return(
			<header className="navbar">
			  <section className="navbar-section">
			    <Link to="/" className="btn btn-link">Home</Link>
			    {this.renderAuthMode()}
			    {this.renderTimeline()}
			  </section>
			  <section className="navbar-center">
			  </section>
			</header>
		);
	}
}

function mapStateToProps(state){
	return{
		authenticated:state.auth.authenticated
	}
}

export default connect(mapStateToProps,actions)(Header);


