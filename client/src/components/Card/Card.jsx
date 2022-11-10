import React from "react";
import { Link } from "react-router-dom";

import image from "../../img/interrogacion.png";
import "./card.css";

const Card = (props) => {
	return (
		<Link to={`/pokemons/${props.id}`}>
			<div className='card'>
				<h3>{props.name.toUpperCase()}</h3>

				<div>
					{props.image ? (
						<img src={props.image} alt={props.name} />
					) : (
						<img src={image} alt={props.name} className='noAdded' />
					)}
				</div>

				<h4>Types:</h4>
				<p>{props.types ? props.types.join(", ") : "¡ no types !"}</p>
			</div>
		</Link>
	);
};

export default Card;
