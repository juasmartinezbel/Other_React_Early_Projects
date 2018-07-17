//¿Qué hacemos para que un componente se cambie?
// ¡CAMBIAR EL ESTADO!


//Se necesitarán clases para cambiar el estado de las cosas
class HelloClass extends React.Component{
	constructor(props){
		super(props);

		//El estado será un objeto, el cual se declara y se le ponen los atributos
		//Los estados van a cambiar por estado
		this.state = {
			nombre: 'Alvaro',
			saludo: 'Buenos Días'
		}
		this.despedirse = this.despedirse.bind(this);
	}

	//Se dispara al despedirse
	despedirse(){
		alert('adios');
		//this.state.saludo = 'Hasta Luego' <-- MAL, no se puede hacer directamente
		this.setState({
			saludo: 'Hasta Luego'
		})
	};

	render(){
		//Ya que estamos en una clase, se necesita poner this.
		//Las acciones que afectarán el estado se escriben en el html, en este caso click a despedirse.
		return(
			//<h1>Hola {this.props.nombre}</h1>
			<h1 onClick={this.despedirse}>{this.state.saludo} {this.state.nombre}</h1>
		);
	}
}


ReactDOM.render(<HelloClass />, document.getElementById('app'))