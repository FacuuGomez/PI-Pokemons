import React, { useState } from "react";
import { useSelector } from "react-redux";

import Card from "../Card/Card";

const Cards = ({ isOpen, closeModal }) => {
	// const [page, setPage] = useState(0);

	const state = useSelector((state) => state);

	// let nextPage = function (e) {
	// 	e.preventDefault();
	// 	if (state.dogs.length >= page * 8 + 8) setPage(page + 1);
	// };

	// let prevPage = function (e) {
	// 	e.preventDefault();
	// 	if (page > 0) setPage(page - 1);
	// };

	return (
		<div className='container'>
			{/* <Filter isOpen={isOpen} closeModal={closeModal}>
				<h3>Filter</h3>
				<Search />
			</Filter> */}

			<div className='containerCards'>
				{state.pokemons &&
					state.pokemons.map((pokemon, i) => {
						// state.pokemons.slice(page * 8, page * 8 + 8).map((pokemon, i) => {
						// console.log(pokemon);
						return (
							<Card
								key={i}
								id={pokemon.id}
								name={pokemon.name}
								image={pokemon.image}
								types={pokemon.types}
							/>
						);
					})}
			</div>

			{/* <div className='containterPage'>
				{state.pokemons && (
					<div className='divBtn'>
						<button className='btnPage' onClick={(e) => prevPage(e)}>
							⬅
						</button>
						<span className='numberPage'>
							{page + 1}/{Math.ceil(state.pokemons.length / 8)}
						</span>
						<button className='btnPage' onClick={(e) => nextPage(e)}>
							➡
						</button>
					</div>
				)}
			</div> */}
		</div>
	);
};

export default Cards;
