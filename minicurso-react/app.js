/*
./node_modules/babel-cli/bin/babel.js --plugins transform-react-jsx app.js --out-file dist-app.js

*/

//JS5: 
function Saludar(props){
	//Props es un objeto
	return (<h1> Hola {props.name} </h1>);
}

//Se pasará name como un elemento de los props
ReactDOM.render(
		<div>
			<Saludar name = "Alejandra"/>
			<Saludar name = "Miguel"/>
			<Saludar name = "Rafael"/>
			<Saludar name = "Sara"/>
			<Saludar name = "Agata"/>
			<Saludar name = "Gabriel"/>
		</div>
	, document.getElementById('app')
	);