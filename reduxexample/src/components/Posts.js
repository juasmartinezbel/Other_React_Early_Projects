import React from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions'

class Posts extends React.Component{
	constructor (props){
    	super(props);
      //Ya no necesitamos constructor, todo será en el estado
  }

  componentWillMount() {
    //Para llamar la acción
    this.props.fetchPosts();   
  }

	render(){

		const postItems = this.state.posts.map(posts=>(
        	<div key={posts.id}>
          	<h3>{posts.title}</h3>
          	<p>{posts.body}</p>
        	</div>
      	));

		return (
			<div>
				<h1>Posts</h1>
				{postItems}
			</div>
		)
	}
}

export default connect(null, {fetchPosts})(Posts);