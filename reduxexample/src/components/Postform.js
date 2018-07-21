import React from 'react'


class Postform extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			title: '',
			body: ''
		};

		this.onChange=this.onChange.bind(this);
	}

	onChange(e){
		//Saber de qué hablamos, si de body o title
						//title-body	//Contenido
		this.setState({[e.target.name]: e.target.value});
	}

	render(){
		return (
			<div>
				<h1>Add Post</h1>
				<form>
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

export default Postform;