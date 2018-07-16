//./node_modules/babel-cli/bin/babel.js --plugins transform-react-jsx app.js --out-file dist-app.js
// Generaráel archivo distAppJSX.js

//Se puede ejecutar código Javascript y llamar variables con {}

const mundo = "Mundos!!!";

// Puedo hacerlo así:
// const elJSX = <h1 id="titleJSX"> Hola {2+5} <span>{mundo}</span> </h1>;

// O puedo:


const elJSX = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		{ id: "titleJSX" },
		"Hola ",
		2 + 5,
		React.createElement(
			"span",
			null,
			mundo
		)
	),
	React.createElement("br", null),
	React.createElement(
		"h2",
		null,
		"YES"
	)
);
// Es preferible tener todo dentro de un <div></div> si es más de un elemento


/**
* JSX Puede usarse en funciones
**/
function getGreeting() {
	let m = 10;
	if (m > 9) {
		return elJSX;
	} else {
		//className = class
		return React.createElement(
			"h1",
			{ id: "titleJSX", className: "title" },
			" Adios ",
			React.createElement(
				"span",
				null,
				mundo
			),
			" :( "
		);
	}
}

ReactDOM.render(getGreeting(), document.getElementById('app'));
