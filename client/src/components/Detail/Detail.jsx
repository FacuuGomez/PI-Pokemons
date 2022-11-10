import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonDetail } from "../../redux/actions";

import image from "../../img/interrogacion.png";
import Loader from "../Loader/Loader";

import "./detail.css";

const Detail = () => {
	const [loader, setLoader] = useState(true);

	const params = useParams();

	const state = useSelector((state) => state);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPokemonDetail(params.id));
	}, [dispatch, params]);

	useEffect(() => {
		if (state.pokemonDetail) {
			setLoader(false);
		}
	}, [state]);

	return (
		<div className='detail-container'>
			{loader ? (
				<Loader />
			) : (
				<div>
					{state.pokemonDetail && (
						<div>
							<h2>{state.pokemonDetail.name.toUpperCase()}</h2>

							<div>
								{state.pokemonDetail.image ? (
									<img
										src={state.pokemonDetail.image}
										alt={state.pokemonDetail.name}
									/>
								) : (
									<img
										src={image}
										alt={state.pokemonDetail.name}
										className='no-added'
									/>
								)}
							</div>

							<div className='data-containter'>
								<div className='data'>
									<h4>Hp: </h4>
									<p>{state.pokemonDetail.hp}</p>
								</div>

								<div className='data'>
									<h4>Attack: </h4>
									<p>{state.pokemonDetail.attack}</p>
								</div>

								<div className='data'>
									<h4>Defense: </h4>
									<p>{state.pokemonDetail.defense}</p>
								</div>

								<div className='data'>
									<h4>Speed: </h4>
									<p>{state.pokemonDetail.speed}</p>
								</div>

								<div className='data'>
									<h4>Attack: </h4>
									<p>{state.pokemonDetail.attack}</p>
								</div>

								<div className='data'>
									<h4>Types: </h4>
									<p>
										{state.pokemonDetail.types &&
										typeof state.pokemonDetail.types[0] === "object"
											? state.pokemonDetail.types &&
											  state.pokemonDetail.types.map((e) => e.name).join(", ")
											: state.pokemonDetail.types &&
											  state.pokemonDetail.types.join(", ")}
									</p>
								</div>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Detail;
