import React,{Component} from 'react';
import Modal from './modal';

class Eachpost extends Component{
	renderEach(post){
		return(
			
				<div className="card" key={post.id}>
					<div className="card-image">
					    <img src={post.file} className="img-responsive" />
					</div>
					<div className="card-header">
					    <div className="card-title h5">{post.title}</div>
					    <div className="card-subtitle text-gray">{post.author}</div>
					</div>
					<div className="card-body">
					    Empower every person and every organization on the planet to achieve more.
					  </div>
					<div className="card-footer">
					    <button className="btn btn-primary">Do</button>
					</div>
				</div>
			
		);
	}

	render(){
		const {data} = this.props;
		//console.log(data);
		return(
			<div className="column col-xs-6" >
				<Modal/>
				{data.map(this.renderEach)}
			</div>
		);
	}
}


export default Eachpost;