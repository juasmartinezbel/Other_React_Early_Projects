import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions'

class Posts extends React.Component{

  componentWillMount() {
    //Para llamar la acción
    this.props.fetchPosts();   
  }

	render(){

		const postItems = this.props.posts.map(posts=>(
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

//Restricciones:
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

//Obtener el state de redux y volverlo props
const mapStateToProps = state => ({
  posts: state.posts.items //Se llama así porque en combineReducers en index lo llamé 'posts'
})

export default connect(mapStateToProps, {fetchPosts})(Posts);