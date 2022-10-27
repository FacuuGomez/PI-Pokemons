const { Router } = require("express");
const { getTypes } = require("../controllers/getTypes.js");

const router = Router();

router.get("/", async (req, res) => {
	try {
		const types = await getTypes();

		res.status(200).json(types);
	} catch (error) {
		console.log(error);

		res.status(400).json({ error: error.message });
	}
});

module.exports = router;
