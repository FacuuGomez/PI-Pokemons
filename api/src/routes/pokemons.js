const { Router } = require("express");
const {
	getAllPokemons,
	getPokemonsById,
} = require("../controllers/getPokemons.js");
const { postPokemon } = require("../controllers/postPokemon.js");

const router = Router();

router.get("/", async (req, res) => {
	try {
		const { name } = req.query;

		const pokemons = await getAllPokemons(name);

		res.status(200).json(pokemons);
	} catch (error) {
		console.log(error);

		res.status(400).json({ error: error.message });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		if (id > 40) throw Error("Pokemon not found");

		const pokemons = await getPokemonsById(id);

		res.status(200).json(pokemons);
	} catch (error) {
		console.log(error);

		res.status(400).json({ error: error.message });
	}
});

router.post("/", async (req, res) => {
	try {
		const pokemon = await postPokemon(req.body);

		res.status(200).json(pokemon);
	} catch (error) {
		console.log(error);

		res.status(400).json({ error: error.message });
	}
});

module.exports = router;
