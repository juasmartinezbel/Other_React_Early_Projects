/*
* Con REACT y JSX
*/

// Se necesita compilar con Babel:
// Crear package.json
/*
*	{
*		"devDependencies": {}
*	}
*	
*
*/
// npm install --save-dev babel-cli babel-plugin-transform-react-jsx
//./node_modules/babel-cli/bin/babel.js --plugins transform-react-jsx appJSX.js --out-file distAppJSX.js
// Generaráel archivo distAppJSX.js
const elJSX = React.createElement(
  "h1",
  { id: "titleJSX" },
  " Hola ",
  React.createElement(
    "span",
    null,
    "Mundo JSX"
  ),
  " "
);

ReactDOM.render(elJSX, document.getElementById('appJSX'));
