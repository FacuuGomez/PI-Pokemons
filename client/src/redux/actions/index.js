import axios from "axios";

export const GET_POKEMON = "GET_POKEMON";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const GET_POKEMON_BY_TYPE = "GET_POKEMON_BY_TYPE";
export const GET_TYPES = "GET_TYPES";
export const CREATE_POKEMON = "CREATE_POKEMON";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_API_POKEMONS = "GET_API_POKEMONS";
export const GET_DB_POKEMONS = "GET_DB_POKEMONS";

export const getAllPokemons = () => {
	return function (dispatch) {
		return axios.get("http://localhost:3001/pokemons").then((res) =>
			dispatch({
				type: GET_ALL_POKEMONS,
				payload: res.data,
			})
		);
	};
};

export const getPokemon = (name) => {
	return function (dispatch) {
		return axios
			.get(`http://localhost:3001/pokemons?name=${name}`)
			.then((res) =>
				dispatch({
					type: GET_POKEMON,
					payload: res.data,
				})
			);
	};
};

export const getPokemonDetail = (id) => {
	return function (dispatch) {
		return axios.get(`http://localhost:3001/pokemons/${id}`).then((res) => {
			dispatch({
				type: GET_POKEMON_DETAIL,
				payload: res.data,
			});
		});
	};
};

export const getTypes = () => {
	return function (dispatch) {
		return axios.get("http://localhost:3001/types").then((res) => {
			dispatch({
				type: GET_TYPES,
				payload: res.data,
			});
		});
	};
};

export const getPokemonByType = (types, pokemons) => {
	return {
		type: GET_POKEMON_BY_TYPE,
		payload: { types, pokemons },
	};
};

export const getApiPokemons = (pokemons) => {
	return {
		type: GET_API_POKEMONS,
		payload: pokemons,
	};
};

export const getDbPokemons = (pokemons) => {
	return {
		type: GET_DB_POKEMONS,
		payload: pokemons,
	};
};

export const createPokemon = (pokemon) => {
	return function (dispatch) {
		return axios.post(`http://localhost:3001/pokemons`, pokemon).then((res) =>
			dispatch({
				type: CREATE_POKEMON,
				payload: res.data,
			})
		);
	};
};
