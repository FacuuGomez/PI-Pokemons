import {
	GET_ALL_POKEMONS,
	GET_POKEMON,
	GET_POKEMON_DETAIL,
	GET_POKEMON_BY_TYPE,
	GET_TYPES,
	CREATE_POKEMON,
	GET_API_POKEMONS,
	GET_DB_POKEMONS,
} from "../actions";

const initialState = {
	pokemons: [],
	pokemonDetail: null,
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
				pokemons: action.payload.pokemons.filter((e) => {
					return e.types.includes(action.payload.types) && e;
				}),
			};
		case GET_TYPES:
			return {
				...state,
				types: state.pokemonDetail !== action.payload && action.payload,
			};
		case CREATE_POKEMON:
			return {
				...state,
				pokemons: [action.payload, ...state.pokemons],
			};

		// -------------- FILTER -------------- //

		case GET_API_POKEMONS:
			return {
				...state,
				pokemons: action.payload.filter((e) => typeof e.id === "number" && e),
			};
		case GET_DB_POKEMONS:
			return {
				...state,
				pokemons: action.payload.filter((e) => e.id.length === 36 && e),
			};
		case "ORDER_AZ":
			return {
				...state,
				pokemons: state.pokemons.sort((a, b) =>
					a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
				),
			};
		case "ORDER_ZA":
			return {
				...state,
				pokemons: state.pokemons.sort((a, b) =>
					a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
				),
			};
		case "STRONG":
			return {
				...state,
				pokemons: state.pokemons.sort((a, b) => (a.attack < b.attack ? 1 : -1)),
			};
		case "WEAK":
			return {
				...state,
				pokemons: state.pokemons.sort((a, b) => (a.attack > b.attack ? 1 : -1)),
			};
		default:
			return { ...state };
	}
};

export default rootReducer;
