class CounterClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};

		this.upCount = this.upCount.bind(this);
		this.downCount = this.downCount.bind(this);
		this.resetCount = this.resetCount.bind(this);
	}

	upCount(e) {
		e.preventDefault(); //Previenen activaciones no deseadas

		this.setState(
		//Atrapar el estado previo para modificarlo/actualizarlo
		function (prevState) {
			return {
				count: prevState.count + 1
			};
		});
	}

	downCount(e) {
		e.preventDefault(); //Previenen activaciones no deseadas

		this.setState(
		//Atrapar el estado previo para modificarlo/actualizarlo
		function (prevState) {
			return {
				count: prevState.count - 1
			};
		});
	}

	resetCount(e) {
		e.preventDefault(); //Previenen activaciones no deseadas
		this.setState({ count: 0 });
	}

	render() {
		return React.createElement(
			"div",
			{ className: "counter" },
			React.createElement(
				"div",
				{ className: "count" },
				this.state.count
			),
			React.createElement(
				"div",
				{ className: "change counter" },
				React.createElement(
					"a",
					{ href: "#", onClick: this.upCount, className: "upCount" },
					"Up"
				),
				React.createElement("br", null),
				React.createElement(
					"a",
					{ href: "#", onClick: this.downCount, className: "downCount" },
					"Down"
				),
				React.createElement("br", null),
				React.createElement(
					"a",
					{ href: "#", onClick: this.resetCount, className: "resetCount" },
					"Reset"
				),
				React.createElement("br", null)
			)
		);
	}
}

ReactDOM.render(React.createElement(CounterClass, null), document.getElementById('app'));
