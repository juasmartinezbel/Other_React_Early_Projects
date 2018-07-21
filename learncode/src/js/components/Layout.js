import React from "react";
import {connect} from "react-redux"
import {fetchUser} from "../actions/userActions"
import {fetchTweets} from "../actions/tweetsActions"
//Hay que poner wrappear componentes del store
@connect((store) => {
	return{
		//La variable toman su nombre de index.js
		user: store.user.user,
		userFetched: store.user.fetched,
		tweets: store.tweets.tweets
	};

})
//store values como props, 
export default class Layout extends React.Component {
	componentWillMount(){
		//Traer una acción
		this.props.dispatch(fetchUser())
	}

	fetchTweets(){
		this.props.dispatch(fetchTweets())
	}

	render(){
		console.log(this.props)
		const {user, tweets} = this.props;

		if(!tweets.length){
			return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
		}
		return <h1>{this.props.user.name}</h1>;
	}
}