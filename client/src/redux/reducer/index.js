import {
	GET_ALL_POKEMONS,
	GET_POKEMON,
	GET_POKEMON_DETAIL,
	GET_POKEMON_BY_TYPE,
	GET_TYPES,
	CREATE_POKEMON,
} from "../actions";

const initialState = {
	pokemons: [],
	pokemonDetail: {},
	types: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_POKEMONS:
			return {
				...state,
				pokemons: action.payload,
			};
		case GET_POKEMON:
			return {
				...state,
				pokemons: action.payload,
			};
		case GET_POKEMON_DETAIL:
			return {
				...state,
				pokemonDetail: action.payload,
			};
		case GET_POKEMON_BY_TYPE:
			return {
				...state,
				pokemons: action.payload,
			};

		case GET_TYPES:
			return {
				...state,
				types: action.payload,
			};

		case CREATE_POKEMON:
			return {
				...state,
				pokemons: [action.payload, ...state.pokemons],
			};
		default:
			return { ...state };
	}
};

export default rootReducer;
