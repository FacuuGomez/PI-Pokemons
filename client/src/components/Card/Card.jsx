import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
	return (
		// <Link to={`/dogs/${props.id}`}>
		<div className='card'>
			<h3>{props.name}</h3>
			{props.image ? (
				<img src={props.image} alt={props.name} />
			) : (
				"¡ image not added !"
			)}
			<p>Types:</p>
			{props.types ? props.types.toString() : "¡ no types !"}
		</div>
		// </Link>
	);
};

export default Card;
