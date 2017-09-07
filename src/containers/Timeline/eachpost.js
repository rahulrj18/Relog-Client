import React,{Component} from 'react';


class Eachpost extends Component{
	renderEach(post){
		return(
			<div className="column col-4 post" key={post.id}>
              	<div className="card">
                <div className="card-header">
                  <div className="card-title h5">{post.title}</div>
                  <div className="card-subtitle text-gray">{post.author}</div>
                </div>
                <div className="card-image">
                  <img className="img-responsive" src={post.file} alt="OS X Yosemite"/>
                </div>
                <div className="card-body">
                  To make a contribution to the world by making tools for the mind that advance humankind.
                </div>
                <div className="card-footer centered">
                  <div className="btn-group btn-group-block">
                    <div className="like">
                    	<a className="card-activity"><i className="fa fa-heart-o" aria-hidden="true"></i> Like</a>
                    	
                    </div>
                    <div className="comment">
                    	<a className="card-activity"><i className="fa fa-comment-o" aria-hidden="true"></i> Comment</a>
                    	
                    </div>
                  </div>
                </div>
              </div>
            </div>
		);
	}

	render(){
		const {data} = this.props;
		//console.log(data);
		return(
			<div className="columns" >
				{data.map(this.renderEach)}
			</div>
		);
	}
}


export default Eachpost;