import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
	return (
		<div className='landing'>
			<h2>Landing</h2>

			<Link to='/pokemons'>
				<button>Home</button>
			</Link>
		</div>
	);
};

export default Landing;
