const axios = require("axios");
const { Type } = require("../db.js");

const getTypes = async () => {
	const dataApi = await axios.get("https://pokeapi.co/api/v2/type");

	const dataTypes = dataApi.data.results.map(async (t) => {
		const [type, created] = await Type.findOrCreate({
			where: {
				name: t.name,
			},
			defaults: {
				name: t.name,
			},
		});

		return type;
	});

	const types = await Promise.all(dataTypes);

	const format = types.map((t) => t.name);

	return format;
};

module.exports = { getTypes };
