/*
./node_modules/babel-cli/bin/babel.js --plugins transform-react-jsx app.js --out-file dist-app.js

*/


//JS6:

// General:
// Se usan parametros por elemento
const User = props =>{
	return (
		<div>
			<img src={props.img} alt={props.name} />
			<p>{props.name}</p>
		</div>

	)
}


// Dividido:
// Se usan objetos al tener intermedios [User2] entre el render y el componente [Avatar y Username]
const Avatar = props => <img src={props.user.img} alt={props.user.name}/>;

const UserName = props => <p>{props.user.name}</p>

const User2 = props =>{
	return (
		<div className="user-item">
			<Avatar user={props.user}/>
			<UserName user={props.user}/>
		</div>

	)
};

const new_user = {
	name: "Miguel Charry",
	img: "https://lh4.googleusercontent.com/W6JNTPUM294-SeTm0n7T6YZoaeja0EDI__Mw_eMvOrUvKBOOrNSM1C6WAF3uUI2qAK2LrFeyHiCu2bI=w1301-h651"
}
//Se pasará name como un elemento de los props
ReactDOM.render(
		<div>
			<User name = "Alejandra Drispe"img="https://lh5.googleusercontent.com/UXNZ8cZ4gd2Uh5-N3I_9lfmqehQAVwHIba6DqNsMXbL6gkT4iqprntSqLtvIX_5Hlw8jr-W53ZQNtAg=w1301-h651" />
			<User2 user = {new_user} />
		</div>
	, document.getElementById('app')
	);