/*
./node_modules/babel-cli/bin/babel.js --plugins transform-react-jsx app.js --out-file dist-app.js

*/

function Saludar(props) {
	//Props es un objeto
	return React.createElement(
		"h1",
		null,
		" Hola ",
		props.name,
		" "
	);
}

//Se pasará name como un elemento de los props
ReactDOM.render(React.createElement(
	"div",
	null,
	React.createElement(Saludar, { name: "Alejandra" }),
	React.createElement(Saludar, { name: "Miguel" }),
	React.createElement(Saludar, { name: "Rafael" }),
	React.createElement(Saludar, { name: "Sara" }),
	React.createElement(Saludar, { name: "Agata" }),
	React.createElement(Saludar, { name: "Gabriel" })
), document.getElementById('app'));
