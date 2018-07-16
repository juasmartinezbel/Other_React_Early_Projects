/*
./node_modules/babel-cli/bin/babel.js --plugins transform-react-jsx app.js --out-file dist-app.js

*/

// Dividido:
// Se usan objetos al tener intermedios [User2] entre el render y el componente [Avatar y Username]
const Avatar = props => React.createElement("img", { src: props.user.img, alt: props.user.name });

const UserName = props => React.createElement(
	"p",
	null,
	props.user.name
);

const User = props => {
	return React.createElement(
		"div",
		{ className: "user-item" },
		React.createElement(Avatar, { user: props.user }),
		React.createElement(UserName, { user: props.user })
	);
};

const users = [{
	name: "Alejandra Drispe",
	img: "https://lh5.googleusercontent.com/UXNZ8cZ4gd2Uh5-N3I_9lfmqehQAVwHIba6DqNsMXbL6gkT4iqprntSqLtvIX_5Hlw8jr-W53ZQNtAg=w1301-h651"
}, {
	name: "Miguel Charry",
	img: "https://lh4.googleusercontent.com/W6JNTPUM294-SeTm0n7T6YZoaeja0EDI__Mw_eMvOrUvKBOOrNSM1C6WAF3uUI2qAK2LrFeyHiCu2bI=w1301-h651"
}, {
	name: "Rafael",
	img: "https://lh6.googleusercontent.com/8lRFb3RZEPQ3vACEhnUH5hDOMLu1CKuNEbO1eLbZDifrFVNxuUn2Ej393SinKaLIVo2ypxLfLvq4LgM=w1301-h651"
}];

const UsersList = props => {
	//list es la lista que se pasa en render
	const userList = props.list.map((u, i) => // Cada elemento de la lista - El Index del Arreglo
	React.createElement(User, { user: u, key: i }));

	return React.createElement(
		"div",
		{ className: "user-list" },
		userList
	);
};

// Se puede hacer uno por uno ciclo o por mapeo
ReactDOM.render(React.createElement(
	"div",
	null,
	React.createElement(
		"div",
		{ className: "unoPorUno" },
		React.createElement(User, { user: users[0] }),
		React.createElement(User, { user: users[1] }),
		React.createElement(User, { user: users[2] })
	),
	React.createElement(
		"div",
		{ className: "mapa" },
		"------------------------------",
		React.createElement("br", null),
		React.createElement(UsersList, { list: users })
	)
), document.getElementById('app'));
