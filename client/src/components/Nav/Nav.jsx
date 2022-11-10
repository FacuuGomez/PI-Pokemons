import React, { Component } from "react";

import { Link } from "react-router-dom";
import image from "../../img/pokemon.png";

import Create from "../Create/Create.jsx";
import Search from "../Search/Search.jsx";
import "./nav.css";

export default class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: false,
		};
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({ ...this.state, filter: true });
	}

	closeModal() {
		this.setState({ ...this.state, filter: false });
	}

	render() {
		return (
			<div className='nav'>
				<Link to='/pokemons'>
					<img src={image} alt='pokemon-pi' />
				</Link>

				<Search />

				<div>
					<button className='create-btn' onClick={this.openModal}>
						CREATE POKEMON
					</button>

					<Create isOpen={this.state.filter} closeModal={this.closeModal}>
						<h3>CREATE POKEMON</h3>
					</Create>
				</div>
			</div>
		);
	}
}
