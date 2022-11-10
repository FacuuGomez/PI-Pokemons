import React, { useState } from "react";
import { useSelector } from "react-redux";

import Card from "../Card/Card.jsx";
import Error from "../ErrorMessage/Error.jsx";

import "./cards.css";

const Cards = () => {
	const [page, setPage] = useState(0);

	const state = useSelector((state) => state);

	let nextPage = function (e) {
		e.preventDefault();
		if (state.pokemons.length >= page * 12 + 12) setPage(page + 1);
	};

	let prevPage = function (e) {
		e.preventDefault();
		if (page > 0) setPage(page - 1);
	};

	return (
		<div className='container'>
			{!state.pokemons.length && !state.pokemons.error && (
				<Error error='¡ There are no pokemons !' />
			)}

			<div className='containerCards'>
				{!state.pokemons.error ? (
					state.pokemons.slice(page * 12, page * 12 + 12).map((pokemon, i) => {
						return (
							<Card
								key={i}
								id={pokemon.id}
								name={pokemon.name}
								image={pokemon.image}
								types={pokemon.types}
							/>
						);
					})
				) : (
					<Error error={state.pokemons.error} />
				)}
			</div>

			<div className='containter-pages'>
				{state.pokemons && (
					<div className='div-buttons'>
						<button className='page-btn' onClick={(e) => prevPage(e)}>
							⬅
						</button>
						<span className='page-number'>
							{page + 1} | {Math.ceil(state.pokemons.length / 12)}
						</span>
						<button className='page-btn' onClick={(e) => nextPage(e)}>
							➡
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cards;
