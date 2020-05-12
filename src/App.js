// create your App component here
import React from "react";

export default class App extends React.Component {
	state = {
		people: [],
	};

	componentDidMount() {
		fetch("http://api.open-notify.org/astros.json")
			.then((response) => response.json())
			.then((data) => {
				this.setState({ people: data });
			});
	}

	render() {
		return (
			<div>
				<p>{this.state.people}</p>
			</div>
		);
	}
}
