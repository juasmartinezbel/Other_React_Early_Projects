/*
* 
./node_modules/babel-cli/bin/babel.js --plugins transform-react-jsx appRelojReact.js --out-file distReloj.js
* Reloj React
*
*/

const appu = document.getElementById('distReloj');

function reloj() {
	let now = new Date().toLocaleTimeString();
	const el = React.createElement(
		'span',
		null,
		now
	);
	ReactDOM.render(el, appu);
}

//Cambiar cada segundo (1000)
setInterval(reloj, 1000);
