import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions'

class Postform extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			title: '',
			body: ''
		};

		this.onChange=this.onChange.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
	}

	onChange(e){
		//Saber de qué hablamos, si de body o title
						//title&/or body	//Contenido
		this.setState({[e.target.name]: e.target.value});
	}

	onSubmit(e){
		e.preventDefault();

		const post ={
			title: this.state.title,
			body: this.state.body
		}
		//Se llamará la acción: Acá se solía tener el fetch

		this.props.createPost(post)
	}
	render(){
		return (
			<div>
				<h1>Add Post</h1>
				<form onSubmit = {this.onSubmit}>
					<div>
						<label>Title: </label><br/>
						<input type ="text" name="title" onChange={this.onChange} value={this.state.title /*default de constructor*/}/>
					</div>
					<br/>
					<div>
						<label>Body: </label><br/>
						<textarea name="body" onChange={this.onChange} value={this.state.body /*default de constructor*/}/>
					</div>
					<br/>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

//Restricciones:
Postform.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(Postform);