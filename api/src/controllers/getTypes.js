const axios = require("axios");
const { Type } = require("../db.js");

const getTypes = async () => {
	let getTypesDb = await Type.findAll();

	let types = [];

	getTypesDb.forEach((t) => {
		types.push(t.name);
	});

	if (types.length) {
		return types;
	} else {
		const dataApi = await axios.get("https://pokeapi.co/api/v2/type");

		const types = dataApi.data.results.map((t) => t.name);

		types.forEach(async (type) => {
			await Type.create({
				name: type,
			});
		});

		return types;
	}
};

module.exports = { getTypes };
