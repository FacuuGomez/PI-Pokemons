import React from "react";
import { Link } from "react-router-dom";

import "./landing.css";

const Landing = () => {
	return (
		<div className='landingContainer'>
			<div className='landing'>
				<Link to='/pokemons'>
					<button className='GoHome'>Home</button>
				</Link>
			</div>
		</div>
	);
};

export default Landing;
