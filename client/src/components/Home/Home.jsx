import React, { Component } from "react";
import { connect } from "react-redux";

import Cards from "../Cards/Cards.jsx";
import Loader from "../Loader/Loader.jsx";
import { getAllPokemons } from "../../redux/actions";

export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loader: false,
		};
	}

	componentDidMount() {
		this.setState({ ...this.state, loader: true });

		this.props.getAllPokemons();

		this.setState({ ...this.state, loader: false });
	}

	render() {
		return (
			<div>
				<h2>Home</h2>

				{this.state.loader && <Loader />}

				<Cards />
			</div>
		);
	}
}

export const mapStateToProps = (state) => {
	return {
		pokemons: state.pokemons,
	};
};

export const mapDispatchToProps = (dispatch) => {
	return {
		getAllPokemons: () => dispatch(getAllPokemons()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
