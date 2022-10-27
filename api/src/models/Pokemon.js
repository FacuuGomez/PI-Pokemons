const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"pokemon",
		{
			id: {
				// type: DataTypes.INTEGER,
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			height: {
				type: DataTypes.INTEGER,
			},
			weight: {
				type: DataTypes.INTEGER,
			},
			hp: {
				type: DataTypes.INTEGER,
			},
			attack: {
				type: DataTypes.INTEGER,
			},
			defense: {
				type: DataTypes.INTEGER,
			},
			speed: {
				type: DataTypes.INTEGER,
			},
		},
		{
			timestamps: false,
		}
	);
};
