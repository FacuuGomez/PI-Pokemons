import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	getAllPokemons,
	getApiPokemons,
	getDbPokemons,
	getPokemonByType,
	getTypes,
} from "../../redux/actions";

import Loader from "../Loader/Loader.jsx";

import "./filter.css";

const Filter = () => {
	const [pokemons, setPokemons] = useState([]);

	const [types, setTypes] = useState([]);

	const [loader, setLoader] = useState(false);

	const state = useSelector((state) => state);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTypes());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getPokemonByType(types, pokemons));
	}, [dispatch, types]);

	useEffect(() => {
		if (state.pokemons.length > 39 || state.pokemons.error) {
			setLoader(false);
		}
	}, [loader, state]);

	useEffect(() => {
		if (state.pokemons.length && pokemons.length < state.pokemons.length) {
			setPokemons(state.pokemons);
		}
	}, [state, pokemons]);

	const handleChange = (e) => {
		if (e.target.value !== "normal") {
			setTypes(e.target.value);
		}
	};

	const handleClick = (e) => {
		if (e.target.name === "API") {
			dispatch(getApiPokemons(pokemons));
		} else if (e.target.name === "DB") {
			dispatch(getDbPokemons(pokemons));
		}

		dispatch({ type: e.target.name });
	};

	const allPokemons = (e) => {
		setLoader(true);

		dispatch(getAllPokemons());
	};

	return (
		<div className='filter-containter'>
			<h3 className='filter-by'>FILTER BY</h3>

			<button name='ALL' className='btn' onClick={(e) => allPokemons(e)}>
				ALL
			</button>

			<article>
				<div className='buttons-container'>
					<button name='API' className='btn' onClick={(e) => handleClick(e)}>
						EXISTING
					</button>

					<button name='DB' className='btn' onClick={(e) => handleClick(e)}>
						CREATED
					</button>

					<button
						name='ORDER_AZ'
						className='btn'
						onClick={(e) => handleClick(e)}
					>
						A-Z
					</button>

					<button
						name='ORDER_ZA'
						className='btn'
						onClick={(e) => handleClick(e)}
					>
						Z-A
					</button>

					<button name='STRONG' className='btn' onClick={(e) => handleClick(e)}>
						STRONG
					</button>

					<button name='WEAK' className='btn' onClick={(e) => handleClick(e)}>
						WEAK
					</button>

					<select
						name='TYPES'
						className='btn'
						onChange={(e) => handleChange(e)}
					>
						<option disable='true'>TYPES</option>

						{state.types &&
							state.types.map((e, i) => {
								return (
									<option key={i} value={e} className='options'>
										{e}
									</option>
								);
							})}
					</select>
				</div>
			</article>

			{loader && <Loader />}
		</div>
	);
};

export default Filter;
