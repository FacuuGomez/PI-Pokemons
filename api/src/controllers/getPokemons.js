const axios = require("axios");
const { Pokemon, Type } = require("../db.js");

const getAllPokemons = async (name) => {
	try {
		const dataApi = await axios.get("https://pokeapi.co/api/v2/pokemon");
		const dataNext = await axios.get(dataApi.data.next);

		const fourtyPokemons = [...dataApi.data.results, ...dataNext.data.results];

		const arrayPromises = fourtyPokemons.map(
			async (pokemon) => await axios.get(pokemon.url)
		);

		const dataPokemonsApi = await Promise.all(arrayPromises);

		const dataPokemonsDb = await Pokemon.findAll({
			include: {
				model: Type,
				// attributes: ["name"],
				through: {
					attributes: [],
				},
			},
		});

		const pokemonsApi = dataPokemonsApi.map((pokemon) => {
			return {
				id: pokemon.data.id,
				name: pokemon.data.name,
				image: pokemon.data.sprites.front_default,
				types: pokemon.data.types.map((t) => t.type.name),
				attack: pokemon.data.stats[1].base_stat,
			};
		});

		const pokemonsDb = dataPokemonsDb.map((pokemon) => {
			return {
				id: pokemon.id,
				name: pokemon.name,
				// image: pokemon.sprites.front_default,
				types: pokemon.types.map((t) => t.name),
				attack: pokemon.attack,
			};
		});

		const allPokemons = [...pokemonsDb, ...pokemonsApi];

		if (name) {
			let pokemon = allPokemons.filter((pokemon) => {
				if (pokemon.name.toLowerCase() === name.toLowerCase()) return pokemon;
			});

			if (!pokemon.length) return { error: "¡ That name does not exist !" };

			return pokemon;
		}

		return allPokemons;
	} catch (error) {
		console.log(error);

		return { error: "¡ Connection problem, try again !" };
	}
};

const getPokemonsById = async (id) => {
	if (id.length === 36) {
		const pokemonDb = await Pokemon.findByPk(id, {
			include: {
				model: Type,
				attributes: ["name"],
				through: {
					attributes: [],
				},
			},
		});

		return pokemonDb;
	} else {
		const dataApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

		let pokemon = dataApi.data;

		pokemon = {
			id: pokemon.id,
			name: pokemon.name,
			image: pokemon.sprites.front_default,
			height: pokemon.height,
			weight: pokemon.weight,
			hp: pokemon.stats[0].base_stat,
			attack: pokemon.stats[1].base_stat,
			defense: pokemon.stats[2].base_stat,
			speed: pokemon.stats[3].base_stat,
			types: pokemon.types.map((t) => t.type.name),
		};

		return pokemon;
	}
};

module.exports = { getAllPokemons, getPokemonsById };
