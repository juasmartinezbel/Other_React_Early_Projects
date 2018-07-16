//./node_modules/babel-cli/bin/babel.js --plugins transform-react-jsx app.js --out-file dist-app.js
// Generaráel archivo distAppJSX.js

//Se puede ejecutar código Javascript y llamar variables con {}

const mundo = "Mundos!!!"

// Puedo hacerlo así:
// const elJSX = <h1 id="titleJSX"> Hola {2+5} <span>{mundo}</span> </h1>;

// O puedo:


const elJSX =(	
				<div>
					<h1 id="titleJSX"> 
						Hola {2+5} 
						<span>
							{mundo}
						</span> 
					</h1>
					<br/>
					<h2>YES</h2>
				</div>
			);
// Es preferible tener todo dentro de un <div></div> si es más de un elemento



/**
* JSX Puede usarse en funciones
**/
function getGreeting(){
	let m = 10;
	if(m>9){
		return elJSX;
	}else{
		//className = class
		return <h1 id="titleJSX" className="title"> Adios <span>{mundo}</span> :( </h1>;
	}	
}

ReactDOM.render(getGreeting(), document.getElementById('app'));
