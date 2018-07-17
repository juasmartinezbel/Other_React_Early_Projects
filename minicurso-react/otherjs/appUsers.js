/*
./node_modules/babel-cli/bin/babel.js --plugins transform-react-jsx app.js --out-file dist-app.js

*/


// Dividido:
// Se usan objetos al tener intermedios [User2] entre el render y el componente [Avatar y Username]
const Avatar = props => <img src={props.user.img} alt={props.user.name}/>;

const UserName = props => <p>{props.user.name}</p>

const User = props =>{
	return (
		<div className="user-item">
			<Avatar user={props.user}/>
			<UserName user={props.user}/>
		</div>
	)
};

const users = [
	{
		name: "Alejandra Drispe",
		img: "https://lh5.googleusercontent.com/UXNZ8cZ4gd2Uh5-N3I_9lfmqehQAVwHIba6DqNsMXbL6gkT4iqprntSqLtvIX_5Hlw8jr-W53ZQNtAg=w1301-h651"
	},

	{
		name: "Miguel Charry",
		img: "https://lh4.googleusercontent.com/W6JNTPUM294-SeTm0n7T6YZoaeja0EDI__Mw_eMvOrUvKBOOrNSM1C6WAF3uUI2qAK2LrFeyHiCu2bI=w1301-h651"
	},
	{
		name: "Rafael",
		img: "https://lh6.googleusercontent.com/8lRFb3RZEPQ3vACEhnUH5hDOMLu1CKuNEbO1eLbZDifrFVNxuUn2Ej393SinKaLIVo2ypxLfLvq4LgM=w1301-h651"
	}
]


const UsersList = props =>{
						//list es la lista que se pasa en render
	const userList = props.list.map(
			(u,i) => // Cada elemento de la lista - El Index del Arreglo
			<User user = {u} key = {i} />
	);

	return (
			<div className = "user-list">
				{userList}
			</div>
		);
}

// Se puede hacer uno por uno ciclo o por mapeo. ¿Pero ciclo es conveniente?
ReactDOM.render(
		<div>
			<div className="unoPorUno">
				<User user = {users[0]} />
				<User user = {users[1]} />
				<User user = {users[2]} />
			</div>
			<div className="mapa">
			------------------------------
			<br/>
				<UsersList list={users} />
			</div>
		</div>
	, document.getElementById('app')
	);