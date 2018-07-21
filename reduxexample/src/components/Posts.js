import React from 'react'

class Posts extends React.Component{
	constructor (props){
    	super(props);
    	this.state = {
      		posts: []
    	}
  	}


  	//Cuando el componente se monte, ejecutará la acción
  	componentWillMount(){
    	//console.log(123);
		fetch('https://jsonplaceholder.typicode.com/posts') //Hacemos fetch del origen y retorna una promesa
    	.then(res => res.json()) //El resultado res se debe pasar a un json
    	.then(data => this.setState({posts:data}) ) //El resultado data del anterior se pasa al estado
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

export default Posts;