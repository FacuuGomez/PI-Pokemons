import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, getTypes } from "../../redux/actions";

import "./create.css";

const Create = ({ children, isOpen, closeModal }) => {
	const [state, setState] = useState({
		name: "",
		height: "",
		weight: "",
		hp: 0,
		attack: 0,
		defense: 0,
		speed: 0,
	});

	const [types, setTypes] = useState([]);

	const [errorParameters, setErrorParameters] = useState(false);

	const [errorName, setErrorName] = useState(false);

	const [errorWeight, setErrorWeight] = useState(false);

	const [errorHeight, setErrorHeight] = useState(false);

	const redux = useSelector((state) => state);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTypes());
	}, [dispatch]);

	useEffect(() => {
		let string = true;

		if (state.name) {
			for (let i = 0; i < state.name.length; i++) {
				if (Number(state.name[i])) {
					string = false;
				}
			}
		}

		if (string) {
			setErrorName(false);
		} else {
			setErrorName(true);
		}
	}, [state.name]);

	useEffect(() => {
		if (state.weight.length > 3) {
			setErrorWeight(true);
		} else {
			setErrorWeight(false);
		}
	}, [state.weight]);

	useEffect(() => {
		if (state.height.length > 3) {
			setErrorHeight(true);
		} else {
			setErrorHeight(false);
		}
	}, [state.height]);

	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });

		setErrorParameters(false);
	};

	const handleTemp = (e) => {
		setTypes([...types, e.target.value]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!state.name || !state.weight || !state.height) {
			setErrorParameters(true);
		} else if (!errorName && !errorWeight && !errorHeight) {
			let obj = {
				name: state.name,
				height: parseInt(state.height),
				weight: parseInt(state.weight),
				hp: state.hp,
				attack: state.attack,
				defense: state.defense,
				speed: state.speed,
			};

			dispatch(createPokemon({ ...obj, types: types }));

			setState({
				name: "",
				height: "",
				weight: "",
				hp: "",
				attack: "",
				defense: "",
				speed: "",
			});

			setTypes([]);

			setErrorName(false);
			setErrorWeight(false);
			setErrorHeight(false);
		}
	};

	const handleDelete = (e) => {
		let newTypes = types.filter((t) => t !== e.target.name);

		setTypes(newTypes);
	};

	return (
		<div className={`create ${isOpen && "is-open"}`}>
			<div className='create-container'>
				<button className='create-close' onClick={closeModal}>
					X
				</button>

				<div>
					<form onSubmit={(e) => handleSubmit(e)}>
						{children}

						<h4>Name: </h4>
						{errorName && (
							<h5 className='p-error'>The name cannot have numbers</h5>
						)}
						<input
							type='text'
							name='name'
							value={state.name}
							className='box'
							autoComplete='off'
							onChange={(e) => handleChange(e)}
						/>

						<h4>Height: </h4>
						{errorHeight && <h5 className='p-error'>Maximum height 999</h5>}
						<input
							type='number'
							min='0'
							max='500'
							name='height'
							value={state.height}
							className='box'
							autoComplete='off'
							onChange={(e) => handleChange(e)}
						/>

						<h4>Weight: </h4>
						{errorWeight && <h5 className='p-error'>Maximum weight 999</h5>}
						<input
							type='number'
							min='0'
							max='500'
							name='weight'
							value={state.weight}
							className='box'
							onChange={(e) => handleChange(e)}
						/>

						<div className='container-range'>
							<h4>Hp: </h4>
							<input
								type='range'
								min='0'
								max='200'
								name='hp'
								value={state.hp}
								className='box-range'
								onChange={(e) => handleChange(e)}
							/>
							<p>{state.hp}</p>

							<h4>Attack: </h4>
							<input
								type='range'
								min='0'
								max='200'
								name='attack'
								value={state.attack}
								className='box-range'
								onChange={(e) => handleChange(e)}
							/>
							<p>{state.attack}</p>

							<h4>Defense: </h4>
							<input
								type='range'
								min='0'
								max='200'
								name='defense'
								value={state.defense}
								className='box-range'
								onChange={(e) => handleChange(e)}
							/>
							<p>{state.defense}</p>

							<h4>Speed: </h4>
							<input
								type='range'
								min='0'
								max='200'
								name='speed'
								value={state.speed}
								className='box-range'
								onChange={(e) => handleChange(e)}
							/>
							<p>{state.speed}</p>
						</div>

						<div className='container-select'>
							<div className='select'>
								<h4>Types: </h4>
								<select
									name='types'
									className='select-types'
									onChange={(e) => handleTemp(e)}
								>
									{redux.types &&
										redux.types.map((e, i) => {
											return (
												<option key={i} value={e} className='options'>
													{e}
												</option>
											);
										})}
								</select>
							</div>

							<button type='submit' className='submit'>
								CREATE POKEMON
							</button>
						</div>
					</form>

					<div className='div-types'>
						{types &&
							types.map((e, i) => {
								return (
									<p key={i} className='p-types'>
										<button
											key={i}
											name={e}
											className='type-close'
											onClick={(e) => handleDelete(e)}
										>
											X
										</button>
										{e}
									</p>
								);
							})}
					</div>

					{errorParameters && <h5 className='p-error'>Missing parameters</h5>}
				</div>
			</div>
		</div>
	);
};

export default Create;
