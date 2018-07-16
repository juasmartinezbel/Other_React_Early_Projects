/*
./node_modules/babel-cli/bin/babel.js --plugins transform-react-jsx app.js --out-file dist-app.js

*/

//JS6:

// General: 
const User = props => {
	return React.createElement(
		"div",
		null,
		React.createElement("img", { src: props.img, alt: props.name }),
		React.createElement(
			"p",
			null,
			props.name
		)
	);
};

// Dividido
const Avatar = props => React.createElement("img", { src: props.user.img, alt: props.user.name });

const UserName = props => React.createElement(
	"p",
	null,
	props.user.name
);

const User2 = props => {
	return React.createElement(
		"div",
		{ className: "user-item" },
		React.createElement(Avatar, { user: props.user }),
		React.createElement(UserName, { user: props.user })
	);
};

const new_user = {
	name: "Miguel Charry",
	img: "https://lh4.googleusercontent.com/W6JNTPUM294-SeTm0n7T6YZoaeja0EDI__Mw_eMvOrUvKBOOrNSM1C6WAF3uUI2qAK2LrFeyHiCu2bI=w1301-h651"
	//Se pasará name como un elemento de los props
};ReactDOM.render(React.createElement(
	"div",
	null,
	React.createElement(User, { name: "Alejandra Drispe", img: "https://lh5.googleusercontent.com/UXNZ8cZ4gd2Uh5-N3I_9lfmqehQAVwHIba6DqNsMXbL6gkT4iqprntSqLtvIX_5Hlw8jr-W53ZQNtAg=w1301-h651" }),
	React.createElement(User2, { user: new_user })
), document.getElementById('app'));
