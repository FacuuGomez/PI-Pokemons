import React, { Component } from "react";
import { connect } from "react-redux";
import { getPokemon } from "../../redux/actions";

import Loader from "../Loader/Loader.jsx";
import "./search.css";

export class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			loader: false,
		};
	}

	componentDidUpdate(pP, pS) {
		if (pS.loader) {
			this.setState({
				...this.state,
				loader: false,
				name: "",
				pokemons: this.props.pokemons,
			});
		}
	}

	handleChange(e) {
		this.setState({ ...this.state, name: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();

		this.setState({ ...this.state, loader: true });

		this.props.getPokemon(this.state.name);
	}

	render() {
		return (
			<div className='container-form'>
				<form className='search-pokemon' onSubmit={(e) => this.handleSubmit(e)}>
					<div className='input'>
						<input
							type='text'
							name='name'
							className='input-search'
							autoComplete='off'
							placeholder='Search...'
							value={this.state.name}
							onChange={(e) => this.handleChange(e)}
						/>
						<button type='submit' className='btn-submit'>
							🔍
						</button>
					</div>

					{this.state.loader && <h6 className='loading'>Loading...</h6>}
				</form>
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
		getPokemon: (name) => dispatch(getPokemon(name)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
