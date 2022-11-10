import React, { Component } from "react";
import { connect } from "react-redux";

import Cards from "../Cards/Cards.jsx";
import Loader from "../Loader/Loader.jsx";
import Error from "../ErrorMessage/Error.jsx";
import Filter from "../Filter/Filter.jsx";

import { getAllPokemons } from "../../redux/actions";

import image from "../../img/logo.png";

import "./home.css";

export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loader: false,
			error: false,
			pokemons: [],
		};
	}

	componentDidMount() {
		this.setState({ ...this.state, loader: true });

		this.props.getAllPokemons();
	}

	componentDidUpdate(pP, pS) {
		if (pS.loader) {
			this.setState({
				...this.state,
				loader: false,
				pokemons: this.props.pokemons,
			});
		}
	}

	render() {
		return (
			<div className='home'>
				<img src={image} alt='Image not found' className='image' />

				<Filter pokemons={this.state.pokemons} />

				{this.state.loader && <Loader />}

				{!this.state.error ? (
					<Cards pokemons={this.state.pokemons} />
				) : (
					<Error error={this.props.pokemons} />
				)}
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
