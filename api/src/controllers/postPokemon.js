const { Pokemon, Type } = require("../db.js");

const postPokemon = async ({
	name,
	height,
	weight,
	hp,
	attack,
	defense,
	speed,
	types,
}) => {
	let pokemon = await Pokemon.create({
		name,
		height,
		weight,
		hp,
		attack,
		defense,
		speed,
		types,
	});

	let typ = await Type.findAll({
		where: {
			name: types,
		},
	});

	await pokemon.addType(typ);

	return { ...pokemon.dataValues, types };
};

module.exports = { postPokemon };
