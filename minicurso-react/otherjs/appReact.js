/*
*
* Con react master race
*
*/


//React usa Virtual DOM, no es lo mismo al original, es su propio cuento, hace que coincida

//Parametros: Tipo, config, children
const elReact = React.createElement('h1', {id:'titleReact'}, 'Hola Mundo React'); 

//Renderizar a través del Virtual DOM la variable
ReactDOM.render(elReact, document.getElementById('appReact'));


// ¿Y como se hace esa wea del span?

//Parametros: Tipo, config, children
const elReact2 = React.createElement(
	'h1', 
	{id:'titleReact2'}, 
	'Hola ',
	React.createElement('span', null, 'mundo React Span')); 

//Renderizar a través del Virtual DOM la variable
ReactDOM.render(elReact2, document.getElementById('appReact'));
